import axios from "axios";
// import { response } from "express";

const getAllUserData = async () => {
  const response = await axios.get(`/api/user-data`);

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

// All of the endpoints in this file can be exported below
export { getAllUserData, createUser, updateUser, deleteUser };