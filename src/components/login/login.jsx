import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/users/usersSlice";

import './login.scss'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;


  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    
  };
  return (
    <>
    <div className="login-container">
    <h1 className="login-word">EDEM</h1>
    <form onSubmit={onSubmit} className="login-form">
    <div className="input-group">
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="correo electronico"
      />
       </div>
       <div className="input-group">
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="password"
      />
       </div>
       <div>
        <p className="recuperar">recuperar contraseña</p>
       </div>
      <button type="submit">Acceder</button>
    </form>
    </div>
    </>
  );
};
export default Login;