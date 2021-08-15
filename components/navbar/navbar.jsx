import React from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.module.scss";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // getting the current page location
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/" style={{ color: "white" }}>
          BC
        </Link>
      </div>
      {location.pathname != "/" && (
        <div className={classes.back}>
          <Link to="/" style={{ color: "white" }}>
            Back
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
