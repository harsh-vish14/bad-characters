import React, { useEffect, useState } from "react";
import occupations from "../../helper/occupation";
import Status from "../status/status";
import classes from "./item.module.scss";

const Item = ({ name, birthday, status, occupation }) => {
  let [occupationString, setOccupationString] = useState("");

  useEffect(() => {
    setOccupationString(occupations(occupation));
  }, []);
  return (
    <div className={classes.item}>
      <div className={classes.info}>
        <div className={classes.details}>
          <div className={classes.name}>{name}</div>
          <div className={classes.extraDetails}>
            <div className={classes.dateOfBirth}>DOB: {birthday}</div>
            <div className={classes.status}>
              <Status status={status} />
            </div>
          </div>
        </div>
        <div className={classes.occupation}>{occupationString}</div>
      </div>
      <div className={classes.more}>
        <img src={"/images/chevron-right.svg"} />
      </div>
    </div>
  );
};

export default Item;
