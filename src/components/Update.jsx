import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    console.log(updatedUser);
    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div>
        <h1>Update Information of {loadedUser.name}</h1>
        <form onSubmit={handleUpdateUser}>
          <input type="text" name="name" defaultValue={loadedUser.name} />
          <br />
          <input type="email" name="email" defaultValue={loadedUser.email} />
          <br />
          <input type="submit" name="submit" value="update" />
        </form>
      </div>
    </div>
  );
};

export default Update;

{
  /* <p>{loadedUser.name}</p>
<p>{loadedUser.email}</p> */
}
