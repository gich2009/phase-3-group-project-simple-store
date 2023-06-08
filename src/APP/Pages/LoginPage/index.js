import { React, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./style.css";

function LoginPage() {
  const [emailAddress, setEmailAddress]     = useState('');
  const [password, setPassword]     = useState('');
  const [users, setUsers] = useState([]);
  // const [validated, setValidated]   = useState(false);
  const navigate = useNavigate();


  // useEffect(()=>{
  //   fetch('http://localhost:9292/users')
  //   .then(response=>response.json())
  //   .then((data) => setUsers(data));
  // }, [])
  
  function handleSubmit(event) {
    event.preventDefault();
    // const found_user = users.findIndex((user) => {
    //   console.log(user);
    //   return user.email_address + user.password == emailAddress + password;
    // })

    // console.log(found_user);
  
    // if(found_user >= 0){
    //   navigate("/home");
    // }

    navigate("/home");
  }

  function handleCancel(){
    navigate("/");
  }
  
  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1>Welcome Back</h1>
        <p>Don't have an account? Sign up <Link className="signup-form-link" to="/signup">here</Link></p>
        <label htmlFor="emailAddress">Email address:</label>
        <input type="text" id="emailAddress" value={emailAddress} onChange={(event) => setEmailAddress(event.target.value)} required placeholder="Enter email address" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required placeholder="Enter password" />
        <button type="submit">Log in</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
  
}

export default LoginPage;