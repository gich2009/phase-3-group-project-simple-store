import { React, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./style.css";

function LoginPage() {
  const [username, setUsername]               = useState('');
  const [password, setPassword]               = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // handle form submission here
    navigate("/home/create");
  }

  function handleCancel(){
    navigate("/");
  }
  
  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1>Welcome Back</h1>
        <p>Don't have an account? Sign up <Link className="signup-form-link" to="/signup">here</Link></p>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} required placeholder="Enter username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required placeholder="Enter password" />
        <button type="submit">Log in</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
  
}

export default LoginPage;