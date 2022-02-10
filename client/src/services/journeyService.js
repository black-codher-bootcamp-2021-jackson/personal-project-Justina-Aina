import axios from "axios";

const getAllUserData = async () => {
  const response = await axios.get(`/api/user-data`);

  return response.data || [];
};

// NOT SURE HOW TO DO THIS 
// const createUser = async () => {
//   axios.post(`/api/user-data`, req.body)
// }

// const updateUser = async () => {
//   axios.put(`/api/user-data`)
// }

// All of the endpoints in this file can be exported below
export { getAllUserData };