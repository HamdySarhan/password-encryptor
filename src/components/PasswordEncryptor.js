import React, { useState } from 'react';
import './PasswordEncryptor.css';
import axios from 'axios';

const PasswordEncryptor = () => {
  const [password, setPassword] = useState('');
  const [encryptedPassword, setEncryptedPassword] = useState('');

  const handleEncrypt = async () => {
    try {
      const response = await axios.post('http://localhost:5000/encrypt', {
        password,
      });
      if (response.data && response.data.encryptedPassword) {
        setEncryptedPassword(response.data.encryptedPassword);
      } else {
        console.error('Failed to encrypt password');
      }
    } catch (error) {
      console.error('API call failed', error);
    }
  };

  return (
    <div className='container'>
      <div className='inner-container'>
        <input
          type='text'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter password'
        />
        <button onClick={handleEncrypt}>Encrypt</button>
        <div>
          <textarea readOnly value={encryptedPassword} />
        </div>
      </div>
    </div>
  );
};

export default PasswordEncryptor;
