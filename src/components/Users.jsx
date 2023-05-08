import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const usersData = useLoaderData();
  const [users, setUsers] = useState(usersData);
  const handleDelete = (id) => {
    console.log("dfdf", id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted successfully");
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      <p>{usersData.length === 0 ? "No user found" : ""}</p>
      {usersData.map((user) => (
        <ul key={user._id}>
          {/* <li>{user._id}</li> */}
          <li>{user.name}</li>
          <li>{user.email}</li>
          <button onClick={() => handleDelete(user._id)}>X</button>
          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default Users;
