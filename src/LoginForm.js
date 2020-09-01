import React, { useState } from "react";
import Alert from './Alert'

/**
 * Renders login form
 * 
 * Routes --> LoginForm --> Alert
 * 
 * State
 * 
 * Props
 * 
 */
function LoginForm() {
  const [formData, setFormData] = useState({});

  const { username, password } = formData;

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => {
      return {
        ...formData,
        [name]: value
      }
    })
  }

  function handleSubmit(evt) {
    // Do something with the parent component function.
    //include some condition to render the alert
  }

  return (
    <div className='LoginForm'>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor = 'username'>Username:</label>
        <input 
          name="username" 
          value = {username} 
          placeholder="username"
          onChange={handleChange} />

        <label htmlFor = 'password'>Password:</label>
        <input 
          name="password" 
          value = {password} 
          placeholder="password"
          onChange={handleChange} />

        <button>Login</button>
      </form>
    </div>
  )
}


export default LoginForm;