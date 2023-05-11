import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const NewUsers = () => {
  const userData = useLoaderData();
  const [users, setUsers] = useState(userData);

  const handleDelete = (id) => {
    console.log(id);

    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted Successfully");
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      {users &&
        users.map((user) => (
          <div
            key={user._id}
            className="flex justify-center gap-6 items-center"
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
            <Link to={`/newUpdate/${user._id}`}>
              <button className="px-3 rounded border border-zinc-500 ">
                Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(user._id)}
              className="px-2 border border-gray-600"
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default NewUsers;
