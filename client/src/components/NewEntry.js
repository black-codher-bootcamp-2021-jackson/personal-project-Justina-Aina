import React, { useState, useEffect, useCallback } from 'react';
import {Link} from 'react-router-dom';

const NewEntry = () => {
    // const [name, setName] = useState(''); 
    const [newUser, setNewUser] = useState('');
    const [hasSubmitted, setSubmitted] = useState(false);

    function handleSubmit(e) {    
        e.preventDefault();    
        setSubmitted(true); 
        console.log({hasSubmitted}) 

        setTimeout(() => {
            setSubmitted(false)
        }, 3000);
    }

    return(
        <div id="entry-form-container">      
            <h3>New Entries</h3> 
            <React.Fragment>
                <Link to="/user"> Back To User</Link>
            </React.Fragment>     
            <h4>Please fill in the form details</h4>      
            <form onSubmit={(e) => handleSubmit(e)}>       
                <>          
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={newUser.first_name} 
                        placeholder="first name"
                        onChange={(e) => { 
                            setNewUser.first_name(e.target.value); 
                            setSubmitted(false) 
                        }} 
                    />
                    <input 
                        type="text" 
                        value={newUser.last_name} 
                        placeholder="last name"
                        onChange={(e) => { 
                            setNewUser.last_name(e.target.value); 
                            setSubmitted(false) 
                        }} 
                    />
                    
                    <label>Birthday:</label>
                    <input 
                        type="date" 
                        value={newUser.birthday} 
                        onChange={(e) => {
                            setNewUser.birthday(e.target.value); 
                            setSubmitted(false) 
                        }}
                    />

                    <label>Likes:</label>               
                    <ol className='Entrant-likes-Detail-box'>
                        <li className='Entrant-likes-Details'>
                            <input 
                                type="text" 
                                value={newUser.likes[1]}
                                onChange={(e) => {
                                    setNewUser.likes[1](e.target.value);
                                    setSubmitted(false)
                                }}                                                     
                            />
                        </li>
                        <li className='Entrant-likes-Details'>
                            <input 
                                type="text" 
                                value={newUser.likes[2]}
                                onChange={(e) => {
                                    setNewUser.likes[2](e.target.value);
                                    setSubmitted(false)
                                }}                                                     
                            />
                        </li>
                        <li className='Entrant-likes-Details'>
                            <input 
                                type="text" 
                                value={newUser.likes[3]}
                                onChange={(e) => {
                                    setNewUser.likes[3](e.target.value);
                                    setSubmitted(false)
                                }}                                                     
                            />
                        </li>
                        <li className='Entrant-likes-Details'>
                            <input 
                                type="text" 
                                value={newUser.likes[4]}
                                onChange={(e) => {
                                    setNewUser.likes[4](e.target.value);
                                    setSubmitted(false)
                                }}                                                     
                            />
                        </li>
                    </ol>
                    
                    
                    
                    {/* CONTINUE CODING HERE */}
                    {/* <label>
                        Location:
                        <input type="text" value={location} onChange={(e) => {setLocation (e.target.value); setSubmitted(false) }}/>
                    </label>         */}
                </>
                <button type="submit">submit</button>   
            </form>      
                
            {/* <ul>
                <h3>Results</h3>           
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Location: {location}</li> 
                <p>{hasSubmitted === true && "Thanks for submitting your filled-out form"}</p>                          
            </ul>  */}
            
        </div>

    //     <div id='Entrant-Details' key={singleUser._id} >

    //     <h3 className='Entrant-Name'>{`${singleUser.first_name} ${singleUser.last_name}`}</h3>
        
    //     <div className='Entrant-Birthday'>
    //       <p>{`${singleUser.birthday}`}</p>
    //       {/* <SunSign birthday={singleUser.birthday}/> */}
    //     </div>
          

    

    //     <div>
    //       <h4 className='Entrant-Dislikes-Title'>Dislikes</h4>
    //       <ol className='Entrant-Dislikes-Detail-box'>
    //         <li className='Entrant-Dislikes-Details'>{`${singleUser.dont_likes[1]}`}</li>
    //         <li className='Entrant-Dislikes-Details'>{`${singleUser.dont_likes[2]}`}</li>
    //         <li className='Entrant-Dislikes-Details'>{`${singleUser.dont_likes[3]}`}</li>
    //         <li className='Entrant-Dislikes-Details'>{`${singleUser.dont_likes[4]}`}</li>
    //       </ol>
    //     </div>

    //   </div>
    )
}
export default NewEntry