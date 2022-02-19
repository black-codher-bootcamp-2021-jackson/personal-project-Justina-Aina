import axios from "axios";
// import { response } from "express";

const getAllUserData = async () => {
  const response = await axios.get(`/api/user-data`);

  return response.data || [];
};

const getSingleUser = async (id) => {
  const response = await axios.get(`/api/user-data/${id}`);

  return response.data || [];
};

const createUser = async (newUser) => {
  const response = await axios.post(`/api/user-data`, newUser);

  return response.data || [];
};

const updateUser = async (id) => {
  const response = await axios.put(`/api/user-data/${id}`);

  return response.data || [];
};

const deleteUser = async (id) => {
  const response = await axios.delete(`/api/user-data/${id}`);

  return response.data || [];
};

const sunSignMessage = async (sign, day) => {
  const response = await axios.post(`https://aztro.sameerkumar.website?sign=${sign}&day=${day}`);

  // console.log(response);
  return response.data.description || "";
};


// CORS error preventing this function from working in the app - it works from a client browser
const externalSearchFunction = async (term) => {
  const response = await axios.get(`https://www.google.com/search?q=site%3Aschoolofsexed.org/blog-articles/+${term}`);

  return response.data || "";
};

// All of the endpoints in this file can be exported below
export { 
  getAllUserData, 
  createUser, 
  updateUser, 
  deleteUser, 
  sunSignMessage, 
  externalSearchFunction 
};