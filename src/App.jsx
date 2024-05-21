import "./App.scss";
import {
  BrowserRouter as Router,
  Link,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
      </Routes>
    </Router>
  );
}

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
