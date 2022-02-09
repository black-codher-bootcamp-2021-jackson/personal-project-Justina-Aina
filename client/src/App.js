import React, { useState, useEffect } from "react";

import { getAllUserData } from "./services/journeyService";

function App() {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        async function getUsers() {
          if (!users) {
            const response = await getAllUserData();
            setUsers(response);
          }
        }
    
        getUsers();
    }, [users]);

    const renderUsers = (profile) => {
        return (
          <li key={profile._id}>
            <h3>
              {`${profile.first_name} 
              ${profile.last_name}`}
            </h3>
            <p>{`${profile.birthday}`}</p>
            <p>{`${profile.wants}`}</p>
            <p>{`${profile.dont_wants}`}</p>
          </li>
        );
    };

    return (
        <div>
          <ul>
            {users && users.length > 0 ? (
              users.map((user) => renderUsers(user))
            ) : (
              <p>No profiles found</p>
            )}
          </ul>
        </div>
      );

}

export default App;