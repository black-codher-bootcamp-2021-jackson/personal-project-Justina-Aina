import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { getAllUserData } from "./services/journeyService";

import UserProfileDetails from "./components/UserProfileDetails";
import EntrantProfileDetails from "./components/EntrantProfileDetails";
import NewEntry from "./components/NewEntry";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          exact path="/user" 
          element={<UserProfileDetails/>}        
        />
        <Route 
          exact path="/entries"
          element={<EntrantProfileDetails/>}          
        />
        <Route 
          exact path="/new-entry"
          element={<NewEntry/>}          
        />
        
      </Routes>
    </BrowserRouter>
  );

}

export default App;