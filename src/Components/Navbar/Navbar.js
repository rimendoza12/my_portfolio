import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../ImagePic/logo4.png';
import {Link} from 'react-scroll';
import  menu from '../../ImagePic/Hamburger_icon.png';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
        <img src={logo} alt="logo"  className="logo"/>
        <div className="desktopMenu" >
          <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
          <Link activeClass="active" to='about' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
          <Link activeClass="active" to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Project</Link>
          <Link activeClass="active" to='experience' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link>
          <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Contact</Link>
        </div>
        <img src={menu} alt="menu"  className="mobMenu" onClick={()=>{setShowMenu(!showMenu)}}/>
        <div className="navMenu" style={{display:showMenu ? 'flex':'none'}}>
          <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>{setShowMenu(true)}}>Home</Link>
          <Link activeClass="active" to='about' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>{setShowMenu(true)}}>About</Link>
          <Link activeClass="active" to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>{setShowMenu(true)}}>Project</Link>
          <Link activeClass="active" to='experience' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>{setShowMenu(true)}}>Skills</Link>
          <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>{setShowMenu(true)}}>Contact</Link>
        </div>
        

      
    </nav>
  )
}

export default Navbar


