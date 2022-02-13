import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { getAllUserData, createUser, deleteUser } from "./services/journeyService";

import UserProfileDetails from "./components/UserProfileDetails";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserProfileDetails/>} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;