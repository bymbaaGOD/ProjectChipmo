import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Энгийн шалгалт
    if (username === 'admin' && password === '1234') {
      setMessage('Амжилттай нэвтэрлээ!');
    } else {
      setMessage('Нэвтрэх нэр эсвэл нууц үг буруу байна.');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', marginTop: '100px' }}>
      <h2>Нэвтрэх</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Нэвтрэх нэр:</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Нууц үг:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '15px' }}>Нэвтрэх</button>
      </form>
      {message && <p style={{ marginTop: '10px' }}>{message}</p>}
    </div>
  );
}
