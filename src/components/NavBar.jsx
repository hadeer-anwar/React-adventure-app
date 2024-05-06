import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import './NavBar.css';

export default function NavBar() {
  const [click, setClick] = useState(false);
  const [button,setButton]=useState(true);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const showButton=()=>{
    if(window.innerWidth<=960)setButton(false);
    else setButton(true);
  }
  window.addEventListener('resize',showButton);

  useEffect(()=>{
    showButton();
  },[])
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          TRVL <i className="fa fa-fighter-jet"></i>
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link" onClick={closeMenu}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-link-mobile" onClick={closeMenu}>
              SIGN UP
            </Link>
          </li>
        </ul>
        {button && <Button btnStyle='btn--outline'>Sign Up</Button>}
      </div>
    </nav>
  );
}
