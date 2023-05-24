import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to={"/testmodule"}>TestModule</Link>
      <Link to={"/anothertestmodule"}>Another Test Module</Link>
      <Outlet />
    </>
  );
}

export default App;
