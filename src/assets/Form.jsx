import React from "react";

const Form = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("users added successfully");
          form.reset();
        }
      });
    //   .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="name" name="name" id="" placeholder="Type your name" />
        <br />
        <input type="email" name="email" id="   " placeholder="you email" />
        <br />
        <input type="submit" name="submit" id="" />
      </form>
    </div>
  );
};

export default Form;
