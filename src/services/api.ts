import axios from 'axios';

const api = axios.create({
  baseURL: 'https://study-blitz-backend.onrender.com/',
  // baseURL: 'http://localhost:5001/',
});

export const getNotes = async () => {
  try {
    const response = await api.get('api/firebase/notes/all');
    return response.data;
  } catch (error) {
    // console.error('Error making API call:', error);
    throw error;
  }
};

export const getDiscussions = async () => {
  try {
    const response = await api.get('api/firebase/discussions/all');
    return response.data;
  } catch (error) {
    // console.error('Error making API call:', error);
    throw error;
  }
};

export const createDiscussion = async (name:string,title:string,description:string) => {
  try {
    const response = await api.post('api/firebase/discussions/create',{
      name:name,
      title:title,
      description:description
    });
    return response.data;
  } catch (error) {
    // console.error('Error making API call:', error);
    throw error;
  }
};

export const createComment = async (discussionId:string,name:string,comment:string) => {
  try {
    const response = await api.post('api/firebase/discussions/comment',{
      discussionId:discussionId,
      name:name,
      comment:comment,
    });
    return response.data;
  } catch (error) {
    // console.error('Error making API call:', error);
    throw error;
  }
};

export const serverStatus = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    // console.error('Error making API call:', error);
    throw error;
  }
};

export const currentuser = async () => {
  try {
    const response = await api.get('api/firebase/auth/currentuser');
    return response.data;
  } catch (error) {
    // console.error('Error making API call:', error);
    throw error;
  }
};

export const signin = async (email: string, password: string) => {
  try {
    const response = await api.post('api/firebase/auth/signin', {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    // console.error('Error making API call:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await api.get('api/firebase/auth/signout');
    return response.data;
  } catch (error) {
    // console.error('Error making API call:', error);
    throw error;
  }
};

export const signup = async (email: string, password: string) => {
  try {
    const response = await api.post('api/firebase/auth/register', {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    // console.error('Error making API call:', error);
    throw error;
  }
};
