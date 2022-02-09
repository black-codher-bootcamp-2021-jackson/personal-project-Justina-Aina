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
            <p>Wants</p>
            <ol>
              <li>{`${profile.wants[1]}`}</li>
              <li>{`${profile.wants[2]}`}</li>
              <li>{`${profile.wants[3]}`}</li>
              <li>{`${profile.wants[4]}`}</li>
            </ol>
            <p>Don't want</p>            
            <ol>
              <li>{`${profile.dont_wants[1]}`}</li>
              <li>{`${profile.dont_wants[2]}`}</li>
              <li>{`${profile.dont_wants[3]}`}</li>
              <li>{`${profile.dont_wants[4]}`}</li>
            </ol>        
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