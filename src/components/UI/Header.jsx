import React from "react";
import MenuList from "./MenuList"
import './Header.css';
import logo from "../../resources/logo.png";

function Header(){
  const menuList = ["Home", "Shop", "Costumer Service", "temp"];

  return <header className="App-header" >
    <nav className="App-nav">
    <img className="Nav-logo" src={logo} alt="firm logo" />
    <ul className="Nav-ul">
      <MenuList menuList={menuList} harald={"Bjørtvedt"}/>
    </ul>
  </nav>
  </header>
}

export default Header;