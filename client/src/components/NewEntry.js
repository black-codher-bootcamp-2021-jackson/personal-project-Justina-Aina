import React, { useState, useEffect, useCallback } from 'react';
import {Link} from 'react-router-dom';
import { getAllUserData, createEntrant } from '../services/journeyService';

const NewEntry = () => {
    // const [name, setName] = useState(''); 
    const [entries, setEntries] = useState(null); 
    const [users, setUsers] = useState(null); 
    const [user, setUser] = useState(null);
    const [newUser, setNewUser] = useState('');
    const [hasSubmitted, setSubmitted] = useState(false);

    const loggedInUser = {_id:"62055cfa2c89cf49b4dbe8f0"};

    useEffect(() => {
        async function getUsers() {
          if (!entries ) {
            const response = await getAllUserData();              
            setEntries(response[0].entries);
            setUsers(response);  
            setUser(response.find(user => user._id === loggedInUser._id));
          }
        }
        getUsers();
    });

    function handleSubmit(e) {    
        e.preventDefault();    
        setSubmitted(true); 
        console.log({hasSubmitted}) 

        setTimeout(() => {
            setSubmitted(false)
        }, 3000);
    }

    const updateEntrantLists = ( value, list, listNumber) => {
        console.log(`set user function ${value}, ${list}, ${listNumber}`);
        setEntries({...entries, [list]: {...entries[list], [listNumber]: value}});
    }; 

    const updateEntrantNonLists = (value, list) => {
        console.log(`updateEntrantNonLists ${value}, ${list}`);
        setEntries({...entries, [list]: value});
    };

    const fireUpdate = () =>{
        const target = document.activeElement;
        console.log(`on blur ${target}`);
        console.log(entries);
        createEntrant(user._id, entries);
    };
    

    return(
        <section id="entry-form-container"> 

            <h3>New Entries</h3> 

            <React.Fragment>
                <Link to="/user"> Back To User</Link>
            </React.Fragment>  

            <h4>Please fill in the form details</h4>
            
            <form onSubmit={(e) => handleSubmit(e)}>       
                <>          
                    <div>
                        <label>Name:</label>
                        <input 
                            type="text"                             
                            placeholder="first name"
                            onChange={(e) => {                                 
                                // NEED TO AMEND HOW FIRST NAME PUSHES TO LIST
                                updateEntrantNonLists(e.target.value, "first_name");
                                setSubmitted(false);
                            }}
                            onBlur={() => {fireUpdate()}}                   
                        />                   
                        <input 
                            type="text"                              
                            placeholder="last name"
                            onChange={(e) => {                                 
                                // NEED TO AMEND HOW LAST NAME PUSHES TO LIST
                                updateEntrantNonLists(e.target.value, "last_name");
                                setSubmitted(false);
                            }}
                            onBlur={() => {fireUpdate()}} 
                        />
                    </div>

                    {/* NONE OF THE BELOW HAS THE CORRECT SYNTAX FOR WHAT IS NEEDED */}
                    {/* /////////////////////////////////////////////////////////////////// */}
                    <div>
                        <label>Birthday:</label>
                        <input 
                            type="date"                             
                            onChange={(e) => {                              
                                updateEntrantNonLists(e.target.value, "birthday");
                                setSubmitted(false);
                            }}
                            onBlur={() => {fireUpdate()}} 
                        />
                    </div>
                    <div>
                        <label>Likes:</label>               
                        <ol className='Entrant-likes-Detail-box'>

                            <li className='Entrant-likes-Details'>
                                <input 
                                type="text"                   
                                onChange={(e) => {                              
                                    updateEntrantLists(e.target.value, "likes", 1);
                                    setSubmitted(false);
                                }}
                                onBlur={() => {fireUpdate()}}                   
                                /> 
                            </li>
                            
                            <li className='Entrant-likes-Details'>
                                <input 
                                    type="text"                                 
                                    onChange={(e) => {                              
                                        updateEntrantLists(e.target.value, "likes", 2);
                                        setSubmitted(false);
                                    }}
                                    onBlur={() => {fireUpdate()}}                                                      
                                />
                            </li>

                            <li className='Entrant-likes-Details'>
                                <input 
                                    type="text"                                 
                                    onChange={(e) => {                              
                                        updateEntrantLists(e.target.value, "likes", 3);
                                        setSubmitted(false);
                                    }}
                                    onBlur={() => {fireUpdate()}}                                                       
                                />
                            </li>

                            <li className='Entrant-likes-Details'>
                                <input 
                                    type="text" 
                                    onChange={(e) => {                              
                                        updateEntrantLists(e.target.value, "likes", 4);
                                        setSubmitted(false);
                                    }}
                                    onBlur={() => {fireUpdate()}}                                                       
                                />
                            </li>
                        </ol>              
                    </div>

                    <div>
                        <label>Dislikes:</label>
                        <ol className='Entrant-Dislikes-Detail-box'>

                            <li className='Entrant-Dislikes-Details'>
                                <input 
                                    type="text"                                 
                                    onChange={(e) => {                              
                                        updateEntrantLists(e.target.value, "dont_likes", 1);
                                        setSubmitted(false);
                                    }}
                                    onBlur={() => {fireUpdate()}}                                                       
                                />
                            </li>

                            <li className='Entrant-Dislikes-Details'>
                                <input 
                                    type="text"                                 
                                    onChange={(e) => {                              
                                        updateEntrantLists(e.target.value, "dont_likes", 2);
                                        setSubmitted(false);
                                    }}
                                    onBlur={() => {fireUpdate()}}                                                     
                                />
                            </li>

                            <li className='Entrant-Dislikes-Details'>
                                <input 
                                    type="text"                                 
                                    onChange={(e) => {                              
                                        updateEntrantLists(e.target.value, "dont_likes", 3);
                                        setSubmitted(false);
                                    }}
                                    onBlur={() => {fireUpdate()}}                                                     
                                />
                            </li>

                            <li className='Entrant-Dislikes-Details'>
                                <input 
                                    type="text"                                 
                                    onChange={(e) => {                              
                                        updateEntrantLists(e.target.value, "dont_likes", 4);
                                        setSubmitted(false);
                                    }}
                                    onBlur={() => {fireUpdate()}}                                                     
                                />
                            </li>
                            
                        </ol>
                    </div>
                    {/* /////////////////////////////////////////////////////////////////// */}
                </>
                {/* <button type="submit">submit</button>    */}
            </form>    
            
        </section>

    

    //   </div>
    )
}
export default NewEntry