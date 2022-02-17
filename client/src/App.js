import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { getAllUserData } from "./services/journeyService";

import UserProfileDetails from "./components/UserProfileDetails";
import EntrantProfileDetails from "./components/EntrantProfileDetails";

function App() {
  
  
  
  // console.log(`this is the APP ${entries}`);

  // // Calls the getUser function from the api
  //   const getUsers = async () => {
  //     // existing function body
  //     if (!users || !entries ) {
  //       const response = await getAllUserData();
  //       //console.log(response);
  //       setUsers(response);  
  //       setEntries(response[0].entries);
  //     }
  //   };
    
  //   useEffect(() => {
  //     getUsers();
  //   });


////////////////////////////////////////////////////
  //Calls the getUser function from the api
  

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          exact path="/" 
          element={<UserProfileDetails/>}        
        />
        <Route 
          exact path="/entries"
          element={<EntrantProfileDetails/>}
        />
      </Routes>
    </BrowserRouter>
  );

}

export default App;