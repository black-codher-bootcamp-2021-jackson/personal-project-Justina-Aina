import React, { useState, useEffect, useCallback } from 'react';
//import '../App.css';
// import SunSign from "./SunSign.js";

const EntrantProfileDetails = (props) => {
  const { users } = props;

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
      {users && users.length > 0 ? (
        users.map((singleUser) => renderUser(singleUser))
      ) : (
        <p>No user found</p>
      )}
    </section>
  );

}

export default EntrantProfileDetails;