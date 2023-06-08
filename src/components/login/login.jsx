import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/users/usersSlice";

import logo from "../../assets/icons/EDEM.png";
import logo1 from "../../assets/icons/EDEMAzul.png";

import "./login.scss";

const Login = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const navigate = useNavigate(); // Llamada a useNavigate dentro del componente de función
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await dispatch(login(formData)); // Esperar a que se complete la solicitud de inicio de sesión
      const token = localStorage.getItem("token");
      if (token) {
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showLogo) {
      document.body.classList.add("logo-container-active");
    } else {
      document.body.classList.remove("logo-container-active");
    }

    return () => {
      document.body.classList.remove("logo-container-active");
    };
  }, [showLogo]);

  return (
    <>
      {showLogo && (
        <div className="logo-container">
          <img src={logo1} alt="Logo de EDEM" className="logo" />
          <h3 className="bottom-quote">Alumnos</h3>
        </div>
      )}

      {!showLogo && (
        <div
          className={`login-container ${
            showLogo ? "logo-visible" : "form-visible"
          }`}
        >
          <img src={logo} alt="Logo de EDEM" className="logo" />
          <form onSubmit={onSubmit} className="login-form">
            <div className="input-group">
              <input
                className="email-input"
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Correo electronico"
              />
            </div>
            <div className="input-group">
              <input
                className="pass-input"
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Contraseña"
              />
            </div>
            <div>
              <p className="recuperar">Recuperar contraseña</p>
            </div>
            <button type="submit" onSubmit={onSubmit} className="login-button">
              Acceder
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
