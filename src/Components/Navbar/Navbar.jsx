import React, { useState } from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MDIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as VSCIcons from "react-icons/vsc";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import Styles from './Navbar.module.css'

import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav class="navbar navbar-expand-md navbar-red navbar-dark ">
        <div class="wrapper">

        </div>
        <div class="container-fluid all-show">
          <Link  to="" className='logo'> Yakitaba</Link>

          <div class=" navbar d-none d-md-block mt-5" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto mb-2 mb-lg-0" className={Styles.NavItem}>
              <li class="nav-item">
                <Link class="nav-link active" className={Styles.active}  to="">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" className={Styles.Link} to="/Menu">Menu</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" className={Styles.Link} to="AdminDashboard">AdminDashboard</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" className={Styles.Link} to="/Contactus">Contact</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" className={Styles.Link} to="/Cart">{<GiIcons.GiShoppingCart className={Styles.Basket} />}</Link>
              </li>

            </ul>
            
          </div>
          <div class="d-flex flex-row " >
            <button  className='ButtonArea d-none d-md-block'>
              <Link to='/Signup' className='Signlink' ><VSCIcons.VscSignIn className='Sign' />Login
              </Link>
            </button>
              <button className='ButtonArea1 d-md-none'>
                <Link to="#" className="menu-bars ">
                  <MDIcons.MdFastfood onClick={showSidebar} className='hamlink'/>
                </Link>
              </button>
             


            </div>
          <IconContext.Provider value={{ color: "undefined" }}>
        <>
          <div className={sidebar ? "nav-menu active" : "nav-menu"} >
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className={Styles.navbartoggle}>
                <Link to="#" className={Styles.menubars}>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                             {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

          </div>
        </>

      </IconContext.Provider>

        </div>
      </nav>
      
    </>
  );
}

export default Navbar;
