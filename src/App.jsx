import useRoutesElements from "./routes/useRoutesElements";

function App() {
  const routeElements = useRoutesElements();
  return <>{routeElements}</>;
}

export default App;
