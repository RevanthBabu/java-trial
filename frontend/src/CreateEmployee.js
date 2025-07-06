import React, { useState } from 'react';

function CreateEmployee() {
  const [employee, setEmployee] = useState({
    name: '',
    sid: '',
    email: '',
    companyName: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch('http://localhost:8080/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee)
      });
      if (response.ok) {
        setMessage('Employee created successfully!');
        setEmployee({ name: '', sid: '', email: '', companyName: '' });
      } else {
        setMessage('Failed to create employee.');
      }
    } catch (error) {
      setMessage('Error connecting to backend.');
    }
  };

  return (
    <div className="form-container">
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:<input type="text" name="name" value={employee.name} onChange={handleChange} required /></label>
        <label>SID:<input type="text" name="sid" value={employee.sid} onChange={handleChange} required /></label>
        <label>Email:<input type="email" name="email" value={employee.email} onChange={handleChange} required /></label>
        <label>Company Name:<input type="text" name="companyName" value={employee.companyName} onChange={handleChange} required /></label>
        <button type="submit">Create</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default CreateEmployee;
