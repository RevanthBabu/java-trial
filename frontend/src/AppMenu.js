import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AppMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Company</Link>
        </li>
        <li className="dropdown" ref={dropdownRef}>
          <span
            tabIndex={0}
            role="button"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onClick={() => setDropdownOpen((open) => !open)}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setDropdownOpen((open) => !open); }}
            style={{ cursor: 'pointer', userSelect: 'none' }}
          >
            Employee Connect
          </span>
          {dropdownOpen && (
            <ul className="dropdown-content">
              <li><Link to="/create-employee" onClick={() => setDropdownOpen(false)}>Create Employee</Link></li>
              <li><button onClick={() => { alert('Update Employee Clicked'); setDropdownOpen(false); }}>Update Employee</button></li>
              <li><Link to="/display-employees" onClick={() => setDropdownOpen(false)}>Display All Employees</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default AppMenu;
