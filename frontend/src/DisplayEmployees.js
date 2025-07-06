import React, { useEffect, useState } from 'react';

function DisplayEmployees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/employees')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch employees');
        return res.json();
      })
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error loading employees.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading employees...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="table-container">
      <h2>All Employees</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>SID</th>
            <th>Email</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.sid}>
              <td>{emp.name}</td>
              <td>{emp.sid}</td>
              <td>{emp.email}</td>
              <td>{emp.companyName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayEmployees;
