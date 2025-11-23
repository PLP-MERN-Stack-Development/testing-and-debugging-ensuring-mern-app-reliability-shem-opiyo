// src/components/BugList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    fetchBugs();
  }, []);

  const fetchBugs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/bugs');
      setBugs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const res = await axios.patch(`http://localhost:5000/api/bugs/${id}`, { status });
      setBugs(bugs.map(bug => bug._id === id ? res.data : bug));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteBug = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bugs/${id}`);
      setBugs(bugs.filter(bug => bug._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ul>
      {bugs.map(bug => (
        <li key={bug._id}>
          <h3>{bug.title}</h3>
          <p>{bug.description}</p>
          <p>Status: {bug.status}</p>
          <select onChange={(e) => updateStatus(bug._id, e.target.value)} value={bug.status}>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
          <button onClick={() => deleteBug(bug._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BugList;