import axios from "axios";

const getAllUserData = async () => {
  const response = await axios.get(`/api/user-data`);

  return response.data || [];
};

// All of the endpoints in this file can be exported below
export { getAllUserData };