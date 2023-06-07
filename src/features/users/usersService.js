import axios from "axios";

const API_URL = 'http://localhost:8080/users'



const login = async (loginData) => {
  
  const res = await axios.post(API_URL+'/login',loginData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", JSON.stringify(res.data.token));
    
  }
  return res.data;
};


const usersService = {
    login
};

export default usersService;