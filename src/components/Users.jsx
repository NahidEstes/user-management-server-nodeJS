// import React, { useState } from "react";
// import { Link, useLoaderData } from "react-router-dom";

// const Users = () => {
//   const usersData = useLoaderData();
//   const [users, setUsers] = useState(usersData);
//   const handleDelete = (_id) => {
//     console.log("dfdf", _id);
//     fetch(`http://localhost:5000/users/${_id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         console.log(_id);
//         if (data.deletedCount > 0) {
//           alert("deleted successfully");
//           const remaining = users.filter((user) => user._id !== _id);
//           setUsers(remaining);
//         }
//       });
//   };
//   return (
//     <div>
//       <p>{usersData.length === 0 ? "No user found" : ""}</p>
//       <div>
//         {usersData.map((user) => (
// <div key={user._id}>
//   <div className="flex justify-center items-center mt-3 gap-4">
//     <div className="border flex gap-3 p-2 border-gray-500 rounded-lg">
//       <p>{user?.name}</p>
//       <p>{user?.email}</p>
//       <Link to={`/update/${user._id}`}>
//         <button className="px-3 rounded border border-zinc-500 ">
//           Edit
//         </button>
//       </Link>
//       <button
//         onClick={() => handleDelete(user._id)}
//         className="px-3 rounded border border-zinc-500 "
//       >
//         Delete
//       </button>
//     </div>
//   </div>
//             {/* <ul key={user._id}>
//           <li>{user._id}</li>
//           <li>{user.name}</li>
//           <li>{user.email}</li>
//           <button onClick={() => handleDelete(user._id)}>X</button>
//           <Link to={`/update/${user._id}`}>
//             <button>Update</button>
//           </Link>
//         </ul> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Users;

import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (_id) => {
    console.log("delete", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };

  return (
    <div>
      <h2>{users.length}</h2>
      <div>
        {users.map((user) => (
          <div key={user._id}>
            <div className="flex justify-center items-center mt-3 gap-4">
              <div className="border flex gap-3 p-2 border-gray-500 rounded-lg">
                <p>{user?.name}</p>
                <p>{user?.email}</p>
                <Link to={`/update/${user._id}`}>
                  <button className="px-3 rounded border border-zinc-500 ">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="px-3 rounded border border-zinc-500 "
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
