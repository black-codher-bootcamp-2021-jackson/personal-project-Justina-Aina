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
        <section id="entry-form-container">      
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
                    {/* <ol className='Entrant-likes-Detail-box'>
                        <li className='Entrant-likes-Details'>
                            <text 
                                type="text" 
                                value={newUser.likes[0]}
                                onChange={(e) => {
                                    setNewUser.likes[0](e.target.value);
                                    setSubmitted(false)
                                }}                                                     
                            />
                        </li>
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
                    </ol>               */}
                    

                </>
                <button type="submit">submit</button>   
            </form>      
            
        </section>

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