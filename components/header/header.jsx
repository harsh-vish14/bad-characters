import React from "react";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.title}>Bad characters are here</div>
      <div className={classes.actionButton}>
        <a href="#main">Explore</a>
      </div>
    </div>
  );
};

export default Header;
