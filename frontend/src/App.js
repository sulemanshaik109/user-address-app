import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !address) {
      setMessage('Please enter both name and address.');
      return;
    }

    try {
      const response = await axios.post('https://suleman-user-address-app.onrender.com/api/register', {
        name,
        address
      });

      if (response.status === 201) {
        setMessage('Registration successful!');
        setName('');
        setAddress('');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setMessage(`Error: ${error.response.data.error}`);
      } else {
        setMessage('An unexpected error occurred.');
      }
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h2>User Registration</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            placeholder="Your address.."
            rows="4"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>

          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default App;
