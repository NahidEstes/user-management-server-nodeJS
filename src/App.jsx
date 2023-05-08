import { Form, Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Link to="/form">Form</Link>
        <Link to="/users">Users</Link>
      </div>
      <Outlet />
    </>
  );
}

export default App;
