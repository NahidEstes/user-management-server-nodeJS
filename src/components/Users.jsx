import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const userData = useLoaderData();
  return (
    <div>
      <h1>users</h1>
      {userData.map((usr) => (
        <ul key={usr._id}>
          <li>Name:{usr.name}</li>
          <li>Email:{usr.email}</li>
        </ul>
      ))}
    </div>
  );
};

export default Users;
