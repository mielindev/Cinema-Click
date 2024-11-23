import { NavLink } from "react-router";
import useRoutesElements from "./routes/useRoutesElements";
import { PATH } from "./routes/path";

function App() {
  const routeElements = useRoutesElements();
  return (
    <>
      <nav className="my-5">
        <NavLink className="p-4 bg-red-600" to={PATH.HOME}>
          Home
        </NavLink>
        <NavLink className="p-4 bg-red-600" to={PATH.LOGIN}>
          Login
        </NavLink>
      </nav>

      {routeElements}
    </>
  );
}

export default App;
