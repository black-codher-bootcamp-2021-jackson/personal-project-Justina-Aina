import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { getAllUserData } from "./services/journeyService";

import UserProfileDetails from "./components/UserProfileDetails";

function App() {
  const [users, setUsers] = useState(null);

  // Calls the getUser function from the api
  useEffect(() => {
    async function getUsers() {
      if (!users) {
        const response = await getAllUserData();
        
        setUsers(response);  
      }
    }

    getUsers();
  }, [users]);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          exact path="/" 
          element={<UserProfileDetails
            users={users} 
            setUsers={setUsers} 
          />}        
        />
      </Routes>
    </BrowserRouter>
  );

}

export default App;