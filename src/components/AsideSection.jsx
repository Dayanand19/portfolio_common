import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export function AsideSection() {
  const location = useLocation();

  return (
    <div className="aside">
      <div className="logo">
        <Link to="home">
          <span>D</span>anny
        </Link>
      </div>
      <div className="nav-toggler">
        <span></span>
      </div>
      <ul className="nav">
        <li>
          <Link
            to="home"
            className={location.pathname === "/home" ? "active" : null}
          >
            <i className="fa fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            className={location.pathname === "/about" ? "active" : null}
          >
            <i className="fa fa-user"></i> About
          </Link>
        </li>
        <li>
          <Link
            to="services"
            className={location.pathname === "/service" ? "active" : null}
          >
            <i className="fa fa-list"></i> Services
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            className={location.pathname === "/portfolio" ? "active" : null}
          >
            <i className="fa fa-briefcase"></i> Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            className={location.pathname === "/contact" ? "active" : null}
          >
            <i className="fa fa-comments"></i> Contact
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AsideSection;
