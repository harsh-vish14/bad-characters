import React from "react";
import Status from "../status/status";
import classes from "./header.module.scss";
import { Image } from "antd";
const Header = ({
  image,
  name,
  nickName,
  dob,
  status,
  occupation,
  portrayed,
  appearance,
}) => {
  const createAppearance = (appearance) => {
    if (!appearance || appearance.length == 0) {
      return "";
    }
    return appearance.join(", ");
  };
  return (
    <div className={classes.header}>
      <div
        className={classes.headerImage}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url("${image}")`,
          backgroundOrigin: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className={classes.image}>
        <Image width={200} src={image} />
      </div>
      <div className={classes.details}>
        <div className={classes.name}>{name}</div>
        <div className={classes.nickName}>
          <span>Nickname:</span>
          {nickName}
        </div>
        <div className={classes.MoreDetails}>
          <div className={classes.dob}>
            <span>DOB:</span>
            {dob}
          </div>
          <Status status={status} />
        </div>
      </div>
      <div className={classes.information}>
        <span>Occupation:</span>
        {occupation}
      </div>
      <div className={classes.information}>
        <span>Portrayed:</span>
        {portrayed}
      </div>
      <div className={classes.information}>
        <span>Seasons:</span>
        {createAppearance(appearance)}
      </div>
    </div>
  );
};

export default Header;
