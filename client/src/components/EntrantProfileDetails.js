import React, { useState, useEffect, useCallback } from 'react';
import {Link} from 'react-router-dom';
import { getAllUserData } from "../services/journeyService";
import NewEntry from './NewEntry';
//import '../App.css';
// import SunSign from "./SunSign.js";

const EntrantProfileDetails = () => {
  const [entries, setEntries] = useState(null);  

  ////////////////////////////////////////////////////
  //Calls the getUser function from the api
  useEffect(() => {
    async function getUsers() {
      if (!entries ) {
        const response = await getAllUserData();
        console.log(response);
        //console.log(response);        
        setEntries(response[1].entries);
      }
    }
    getUsers();
  });

  const renderUser = (singleUser) => {
    console.log(singleUser);

    return (
      
      <div id='Entrant-Details' key={singleUser._id} >

        <h3 className='Entrant-Name'>{`${singleUser.first_name} ${singleUser.last_name}`}</h3>
        
        <div className='Entrant-Birthday'>
          <p>{`${singleUser.birthday}`}</p>
          {/* <SunSign birthday={singleUser.birthday}/> */}
        </div>
          

        <div>
          <h4 className='Entrant-likes-Title'>likes</h4>
          <ol className='Entrant-likes-Detail-box'>
            <li className='Entrant-likes-Details'>{`${singleUser.likes[1]}`}</li>
            <li className='Entrant-likes-Details'>{`${singleUser.likes[2]}`}</li>
            <li className='Entrant-likes-Details'>{`${singleUser.likes[3]}`}</li>
            <li className='Entrant-likes-Details'>{`${singleUser.likes[4]}`}</li>
          </ol>
        </div>

        <div>
          <h4 className='Entrant-Dislikes-Title'>Dislikes</h4>
          <ol className='Entrant-Dislikes-Detail-box'>
            <li className='Entrant-Dislikes-Details'>{`${singleUser.dont_likes[1]}`}</li>
            <li className='Entrant-Dislikes-Details'>{`${singleUser.dont_likes[2]}`}</li>
            <li className='Entrant-Dislikes-Details'>{`${singleUser.dont_likes[3]}`}</li>
            <li className='Entrant-Dislikes-Details'>{`${singleUser.dont_likes[4]}`}</li>
          </ol>
        </div>

      </div>
      
    );
  };

  return (
    <section>
      {entries && entries.length > 0 ? (
        <div>
          <React.Fragment>
            <Link to="/new-entry"> New Entry </Link>
            <Link to="/user"> Back To User</Link>
          </React.Fragment>
          {entries.map((singleUser) => renderUser(singleUser))}
        </div>          
      ) : (
        <div>
          <p>No user found</p>
          <NewEntry />
        </div>
      )}
    </section>
  );
  

}

export default EntrantProfileDetails;