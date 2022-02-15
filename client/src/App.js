import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { getAllUserData } from "./services/journeyService";

import UserProfileDetails from "./components/UserProfileDetails";
import EntrantProfileDetails from "./components/EntrantProfileDetails";

function App() {
  const [users, setUsers] = useState(null);
  const [entries, setEntries] = useState(null);
  
  // console.log(`this is the APP ${entries}`);
  
  // Calls the getUser function from the api
  useEffect(() => {
    async function getUsers() {
      if (!users || !entries ) {
        const response = await getAllUserData();

        //console.log(response);
        setUsers(response);  
        setEntries(response[0].entries);
      }
    }
    getUsers();
  });



  // setEntrants(users.entries);
  

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
        <Route 
          exact path="/entries"
          element={<EntrantProfileDetails
            users={entries}
            setUsers={setEntries}
          />}
        />
      </Routes>
    </BrowserRouter>
  );

}

export default App;