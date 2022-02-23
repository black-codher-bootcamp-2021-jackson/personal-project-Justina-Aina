import React, { useState, useEffect, useCallback } from 'react';
import {Link} from 'react-router-dom';
import styles from "../styles/UserProfileDetails.module.css";
// import '../App.css';
import SunSign from "./SunSign.js";
// import SexEdSearchBar from './SexEdSearchBar.js';
import { getAllUserData, updateUser } from "../services/journeyService";

const UserProfileDetails = (props) => {
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState(null);
  //const { users, setUsers } = props;
  // console.log('Type of users', typeof users);
  // console.log('Props', props);
  
  const loggedInUser = {_id:"62055cfa2c89cf49b4dbe8f1"};
  ////////////////////////////////////////////////////
  //Calls the getUser function from the app
  useEffect(() => {
    async function getUsers() {
      if (!users) {
        const response = await getAllUserData();

        //console.log(response);
        setUsers(response);  
        setUser(response.find(user => user._id === loggedInUser._id));
      }
    }
    getUsers();
  });

  /////////////////////////////////////////////////////////////
  //function to update info in already created users and entrants
  const updateUserList = ( value, list, listNumber) => {
    console.log(`set user function ${value}, ${list}, ${listNumber}`);
    setUser({...user, [list]: {...user[list], [listNumber]: value}});
  }; 

  const fireUpdate = () =>{
    const target = document.activeElement;

    console.log(`on blur ${target}`);
    console.log(user);
    updateUser(user._id, user);
    //console.log(`user updated ${user}`);
  };
  /////////////////////////////////////////////////////////////


  const renderUser = (singleUser) => {
    // console.log(singleUser);

    return (
      
      <div id={styles.UserDetails} key={singleUser._id} >

        <h3 className={styles.UserName}>{`${singleUser.first_name} ${singleUser.last_name}`}</h3>
        
        <div className={styles.UserSunSign}>
          {/* <p>{`${singleUser.birthday}`}</p> */}
          <SunSign birthday={singleUser.birthday}/>
        </div>
          
        {/* <SexEdSearchBar /> */}

        <React.Fragment>
          <Link to="/entries"> Entries </Link>
        </React.Fragment>

        <div>
          <h4 className='User-Wants-Title'>Wants</h4>
          <ol className='User-Wants-Detail-box'>
            <li className='User-Wants-Details'>
              <input 
                type="text" 
                value={`${singleUser.wants[1]}`} 
                onChange={(e) => {updateUserList(e.target.value, "wants", 1)}}
                onBlur={() => {fireUpdate()}}                        
              />
            </li>
            <li className='User-Wants-Details'>
              <input 
                type="text" 
                value={`${singleUser.wants[2]}`} 
                onChange={(e) => {updateUserList(e.target.value, "wants", 2)}}
                onBlur={() => {fireUpdate()}}             
              />
            </li>
            <li className='User-Wants-Details'>          
              <input 
                type="text" 
                value={`${singleUser.wants[3]}`} 
                onChange={(e) => {updateUserList(e.target.value, "wants", 3)}}  
                onBlur={() => {fireUpdate()}}           
              />
            </li>
            <li className='User-Wants-Details'>            
              <input 
                type="text" 
                value={`${singleUser.wants[4]}`} 
                onChange={(e) => {updateUserList(e.target.value, "wants", 4)}}   
                onBlur={() => {fireUpdate()}}          
              />
            </li>
          </ol>
        </div>

        <div>
          <h4 className='User-DontWants-Title'>Not Wanted</h4>
          <ol className='User-DontWants-Detail-box'>
            <li className='User-DontWants-Details'>
              <input 
                type="text" 
                value={`${singleUser.dont_wants[1]}`} 
                onChange={(e) => {updateUserList(e.target.value, "dont_wants", 1)}}
                onBlur={() => {fireUpdate()}}             
              />
            </li>
            <li className='User-DontWants-Details'>
              <input 
                type="text" 
                value={`${singleUser.dont_wants[2]}`} 
                onChange={(e) => {updateUserList(e.target.value, "dont_wants", 2)}}  
                onBlur={() => {fireUpdate()}}           
              />
            </li>
            <li className='User-DontWants-Details'>          
              <input 
                type="text" 
                value={`${singleUser.dont_wants[3]}`} 
                onChange={(e) => {updateUserList(e.target.value, "dont_wants", 3)}}  
                onBlur={() => {fireUpdate()}}           
              />
            </li>
            <li className='User-DontWants-Details'>          
              <input 
                type="text" 
                value={`${singleUser.dont_wants[4]}`} 
                onChange={(e) => {updateUserList(e.target.value, "dont_wants", 4)}}    
                onBlur={() => {fireUpdate()}}         
              />
            </li>
          </ol>
        </div>

      </div>
      
    );
  };
  // const singleUser = users && users.find(user => user._id === logIn._id);
  
  return (
    <section>
      {user ? (
        renderUser(user)
      ) : (
        <h3>No user found</h3>
      )}
    </section>
  );
}

export default UserProfileDetails; 



