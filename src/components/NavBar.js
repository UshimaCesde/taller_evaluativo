import React from 'react';
 import './navbar.css';  

const intentoLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Bavaria_%28Kolumbien%29_logo.svg/684px-Bavaria_%28Kolumbien%29_logo.svg.png' 



function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={intentoLogo} alt="Company Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;