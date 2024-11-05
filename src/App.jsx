import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarWithStyling from "./component/navbar/NavbarWithStyling";
import About from "./component/about/About";

function Navbar() {
  return (
    <div>
      <h1>FSW 2</h1>
      <ul>
        <li>About Me</li>
        <li>FAQ</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const ListMenu = ["Home", "About", "Logout"];

  return (
    <>
      <NavbarWithStyling
        menu={ListMenu}
        name="saha"
        age="20"
        address="Mojokerto"
      />

      <NavbarWithStyling
        menu={ListMenu}
        name="saha"
        age="20"
        address="Mojokerto"
      />

      <NavbarWithStyling
        menu={ListMenu}
        name="saha"
        age="20"
        address="Mojokerto"
      />
      <About />
    </>
  );
}

export default App;
Navbar;
