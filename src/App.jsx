import { Form, Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      {/* <div className="font-bold text-gray-700 m-4">
        <Link className="m-4" to="/form">
          Form
        </Link>
        <Link to="/users">Users</Link>
      </div> */}
      <div className="font-bold text-gray-700 ">
        <Link to="/newForm">Form</Link>
        <Link to="/newUser">Users</Link>
      </div>
      <Outlet />
    </>
  );
}

export default App;
