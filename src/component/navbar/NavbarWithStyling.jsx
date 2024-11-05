import { useState } from "react";
import "./NavbarWithStyling.css";
import About from "../about/About";


function NavbarWithStyling(props, age, address) {
  // const [list, setList] = useState('')

  let list;

  if (name) {
    list = (
      <ul>
        <li>{props.menu[0]}</li>
        <li>{props.menu[1]}</li>
        <li>{props.menu[2]}</li>
      </ul>
    );
  } else {
    list = <h1>List not exist</h1>;
  }

  return (
    <>
      <div className="style">
        <h1>FSW 2 {name}</h1>
        <ul>
          <li>{props.menu[0]}</li>
          <li>{props.menu[1]}</li>
          <li>{props.menu[2]}</li>
        </ul>
      </div>
      <About name={name} />
    </>
  );
}

export default NavbarWithStyling;
