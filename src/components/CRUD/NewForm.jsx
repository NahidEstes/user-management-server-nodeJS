import React from "react";

const NewForm = () => {
  const handleForm = (e) => {
    console.log("dfdf");
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
      });
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        {/* <input type="name" name="name" id="" placeholder="Type your name" />
        <br />
        <input type="email" name="email" id="" placeholder="you email" />
        <br />
        <input type="submit" name="submit" id="" /> */}
        <div>
          <input
            type="text"
            name="name"
            className="p-2 border border-zinc-500 rounded"
            id=""
            placeholder="your name"
          />
          <br />
          <input
            type="email"
            className="p-2 border border-zinc-500 rounded mt-2"
            name="email"
            placeholder="your email"
          />
          <br />
          <input
            type="submit"
            className="p-2 border border-zinc-500 rounded mt-2"
            name="submit"
            id=""
          />
        </div>
      </form>
    </div>
  );
};

export default NewForm;
