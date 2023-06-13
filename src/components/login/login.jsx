import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/EDEM.png";
import logo1 from "../../assets/icons/EDEMAzul.png";
import "./login.scss";
import { UserContext } from "../../context/UserContext/UserState";

const Login = () => {
  const { login, token, user} = useContext(UserContext);
  const [showLogo, setShowLogo] = useState(true);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setLoginForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
useEffect(()=>{
const localToken = localStorage.getItem('token')
if (localToken) {
  navigate('/')
}
},[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(loginForm);

    if (user.firstOnBoard === true) {
      navigate("/onBoarding");
    } else {
      navigate("/");
    }
  };
  useEffect(()=>{
    console.log(user);
  },[user,token])
  // useEffect(() => {
  //   const timer = setTimeout(() => {
      
  //     // Aquí puedes realizar la lógica adicional que necesites
  //   }, 2000); // Ajusta el tiempo de espera según tus necesidades

  //   return () => clearTimeout(timer);
  // }, [token, user]);

  //la funcion de logout deberia de limpiar el estado general del token para que esto no te lleve a home 
  // useEffect(() => {
  //   const tokenStorage = JSON.parse(localStorage.getItem('token'))
  //   setTokenStorage(tokenStorage);
  //   if (tokenStorage === 'token') {
  //     navigate("/");
  //   }
  // }, []);
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
          className={`login-container ${showLogo ? "logo-visible" : "form-visible"
            }`}
        >
          <img src={logo} alt="Logo de EDEM" className="logo" />
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                className="email-input"
                type="email"
                name="email"
                value={loginForm.email}
                onChange={onChange}
                placeholder="Correo electrónico"
              />
            </div>
            <div className="input-group">
              <input
                className="pass-input"
                type="password"
                name="password"
                value={loginForm.password}
                onChange={onChange}
                placeholder="Contraseña"
              />
            </div>
            <div>
              <p className="recuperar">Recuperar contraseña</p>
            </div>
            <button type="submit" className="login-button">
              Acceder
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;