import React, { useState, useEffect, useCallback } from 'react';
//import '../App.css';
import SunSign from "./SunSign.js";
import SexEdSearchBar from './SexEdSearchBar.js';

const UserProfileDetails = (props) => {
  const { users } = props;
  console.log(`this is in userprofiledetails ${users}`);

  const renderUser = (singleUser) => {
    console.log(singleUser);

    return (
      
      <div id='UserDetails' key={singleUser._id} >

        <h3 className='User-Name'>{`${singleUser.first_name} ${singleUser.last_name}`}</h3>
        
        <div className='User-Birthday'>
          {/* <p>{`${singleUser.birthday}`}</p> */}
          <SunSign birthday={singleUser.birthday}/>
        </div>
          
        <SexEdSearchBar />

        <div>
          <h4 className='User-Wants-Title'>Wants</h4>
          <ol className='User-Wants-Detail-box'>
            <li className='User-Wants-Details'>{`${singleUser.wants[1]}`}</li>
            <li className='User-Wants-Details'>{`${singleUser.wants[2]}`}</li>
            <li className='User-Wants-Details'>{`${singleUser.wants[3]}`}</li>
            <li className='User-Wants-Details'>{`${singleUser.wants[4]}`}</li>
          </ol>
        </div>

        <div>
          <h4 className='User-DontWants-Title'>Not Wanted</h4>
          <ol className='User-DontWants-Detail-box'>
            <li className='User-DontWants-Details'>{`${singleUser.dont_wants[1]}`}</li>
            <li className='User-DontWants-Details'>{`${singleUser.dont_wants[2]}`}</li>
            <li className='User-DontWants-Details'>{`${singleUser.dont_wants[3]}`}</li>
            <li className='User-DontWants-Details'>{`${singleUser.dont_wants[4]}`}</li>
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

export default UserProfileDetails;


// // app.delete("/rhymes/:id", (req, res) => {
// //   const id = req.params.id;
// //   const updatedRhymes = rhymes.filter((rhyme) => rhyme.id != id);

// //   fs.writeFileSync(rhymesAbsoluteFilePath, JSON.stringify(updatedRhymes));

// //   res.status(202).end();
// // });

// const PersonDetails = () => {
//   const {id} = useParams();
//   let [person, setPerson] = useState();

//   const fetchPerson = useCallback(async () => {
//     let response = await fetch('http://localhost:8080/api/people/' + id)
//     response = await response.json();
//     setPerson(response);
// },[id]);

//   useEffect(() => {
//     fetchPerson();
//   }, [fetchPerson]);

//   function onDeleteClick (id) {
//     fetch('http://localhost:8082/api/books/'+id, {
//       method: "DELETE"
//     })
//       .then(res => {
//         this.props.history.push("/");
//       })
//       .catch(err => {
//         console.log("Error form PersonDetail_deleteClick");
//       })
//   };

//     return (
//       <div className="PersonDetail">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-10 m-auto">
//               <br /> <br />
//               <Link to="/" className="btn btn-outline-warning btn-lg float-left">
//                   Person List
//               </Link>
//             </div>
//             <br />
//             <div className="col-md-8 m-auto">
//               <h1 className="display-4 text-center">Person's Record</h1>
//               <p className="lead text-center">
//                   View Person's Info
//               </p>
//               <hr /> <br />
//             </div>
//           </div>
//           <div>
//           <div>
//     <table className="table table-hover table-dark">
//     {/* <thead>
//       <tr>
//         <th scope="col">#</th>
//         <th scope="col">First</th>
//         <th scope="col">Last</th>
//         <th scope="col">Handle</th>
//       </tr>
//     </thead> */}
//     <tbody>
//       <tr>
//         <th scope="row">1</th>
//         <td>First Name</td>
//         <td>{ person?.name.first }</td>
//       </tr>
//           <tr>
//             <th scope="row">2</th>
//             <td>Last Name</td>
//             <td>{ person?.name.last }</td>
//           </tr>
//           <tr>
//             <th scope="row">3</th>
//             <td>Registration Date</td>
//             <td>{ person?.registered.date }</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//           </div>

//           <div className="row">
//             <div className="col-md-6">
//               <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={() => onDeleteClick(person?._id)}>Delete Person</button><br />
//             </div>

//             {/* <div className="col-md-6">
//               <Link to={`/edit-person/${person?._id}`} className="btn btn-outline-info btn-lg btn-block">
//                     Edit Person
//               </Link>
//               <br />
//             </div> */}

//           </div>
//             {/* <br />
//             <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Person</button>
//             <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Person</button> */}
//         </div>
//       </div>
//   );
// }

// export default PersonDetails;



