// import React from "react";
// import { useLoaderData } from "react-router-dom";

// const NewUpdate = () => {
//   const updateUserData = useLoaderData();
//   console.log(updateUserData);
//   const handleUpdateUser = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const updatedUser = { name, email };
//     console.log(updatedUser);
//     // fetch(`http://localhost:5000/users/${updateUserData._id}`, {
//     //   method: "PUT",
//     //   headers: {
//     //     "content-type": "application/json",
//     //   },
//     //   body: JSON.stringify(updatedUser),
//     // })
//     //   .then((res) => res.json())
//     //   .then((data) => {
//     //     console.log(data);
//     //   });
//     fetch(`http://localhost:5000/users/${updateUserData._id}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(updatedUser),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.modifiedCount > 0) {
//           alert("user updated successfully");
//         }
//       });
//   };
//   return (
//     <div>
//       <form onSubmit={handleUpdateUser}>
//         {/* <input type="text" name="name" defaultValue={loadedUser.name} />
//           <br />
//           <input type="email" name="email" defaultValue={loadedUser.email} />
//           <br />
//           <input type="submit" name="submit" value="update" /> */}
//         <div>
//           <input
//             type="text"
//             name="name"
//             className="px-2 border border-zinc-500 rounded"
//             id=""
//             defaultValue={updateUserData?.name}
//             placeholder="your name"
//           />
//           <br />
//           <input
//             type="email"
//             className="px-2 border border-zinc-500 rounded mt-2"
//             name="email"
//             placeholder="your email"
//             defaultValue={updateUserData?.email}
//           />
//           <br />
//           <input
//             type="submit"
//             className="p-2 border border-zinc-500 rounded mt-2"
//             name="submit"
//             id=""
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default NewUpdate;

import React from "react";
import { useLoaderData } from "react-router-dom";

const NewUpdate = () => {
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
        if (data.modifiedCount > 0) {
          alert("user updated successfully");
        }
      });
  };

  return (
    <div>
      <div>
        <h1 className="my-3 text-xl font-semibold">
          Update Information of {loadedUser.name}
        </h1>
        <form onSubmit={handleUpdateUser}>
          {/* <input type="text" name="name" defaultValue={loadedUser.name} />
          <br />
          <input type="email" name="email" defaultValue={loadedUser.email} />
          <br />
          <input type="submit" name="submit" value="update" /> */}
          <div>
            <input
              type="text"
              name="name"
              className="px-2 border border-zinc-500 rounded"
              id=""
              defaultValue={loadedUser.name}
              placeholder="your name"
            />
            <br />
            <input
              type="email"
              className="px-2 border border-zinc-500 rounded mt-2"
              name="email"
              placeholder="your email"
              defaultValue={loadedUser.email}
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
    </div>
  );
};

export default NewUpdate;
