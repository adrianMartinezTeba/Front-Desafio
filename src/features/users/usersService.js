import axios from "axios";
const API_URL = 'http://localhost:8080'
const register = async (registerForm) => {
  const res = await axios.post(API_URL+'/register',registerForm);
 
  return res.data;
};

const usersService = {
    register
};

export default usersService;