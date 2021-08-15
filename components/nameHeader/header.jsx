import React from "react";
import Status from "../status/status";
import classes from "./header.module.scss";
import { Image } from "antd";
/**
 * Header of dynamic pages
 * @param {URL} image
 * @param {String} name
 * @param {String} nickName
 * @param {String} dob
 * @param {String} status
 * @param {Array} occupation
 * @param {String} portrayed
 * @param {Array} appearance
 * @return {Component}
 */
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
  /**
   * converting array to string
   * @param {Array} seasons
   * @return {String}
   */
  const createSeasons = (seasons) => {
    if (!seasons || seasons.length == 0) {
      return "";
    }
    return seasons.join(", ");
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
        {createSeasons(appearance)}
      </div>
    </div>
  );
};

export default Header;
