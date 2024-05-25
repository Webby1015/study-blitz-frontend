import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://study-blitz-backend.onrender.com/',
  baseURL: 'http://localhost:5001/',
});

export const currentuser =  async ()=>{
  try {
    const response = await api.get('api/firebase/auth/currentuser'); 
    return response.data;
  } catch (error) {
    // console.error('Error making API call:', error);
    throw error;
  }
}

export const signin =  async (email:string,password:string)=>{
  try {
    const response = await api.post('api/firebase/auth/signin',
      {
        "email": email,
        "password": password
      }
    ); 
    return response.data;
  } catch (error) {
    // console.error('Error making API call:', error);
    throw error;
  }
}

export const logout =  async ()=>{
  try {
    const response = await api.get('api/firebase/auth/signout'); 
    return response.data;
  } catch (error) {
    // console.error('Error making API call:', error);
    throw error;
  }
}




