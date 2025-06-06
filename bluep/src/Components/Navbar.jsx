import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">

     <div className="navbar-container">
     <div className="navbar-links left"> 
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
        </div>
         <div className="navbar-logo">
        <img src="logo (2).png" alt="Logo" className="navbar-logo" />
         <span className="logo-text">Blueprint Designs</span>
        </div>
        <div className="navbar-links right">
          <a href="#designers">Designers</a>
          <a href="#resources">Resources</a>
          <a href="#contact">Contact</a>
        </div>
      </div> 
      </nav>
  );
};

export default Navbar;



     