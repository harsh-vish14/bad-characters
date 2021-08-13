import React, { useEffect, useState } from "react";
import classes from "./item.module.scss";

const Item = ({ name, birthday, status, occupation }) => {
  let [occupationString, setOccupationString] = useState("");
  const occupations = (values) => {
    if (!values || values.length == 0) {
      return "";
    }

    return values.join(", ");
  };
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
            <div
              className={classes.status}
              style={{
                color: status.toLowerCase() == "alive" ? "green" : "red",
              }}
            >
              {status}
            </div>
          </div>
        </div>
        <div className={classes.occupation}>{occupationString}</div>
      </div>
      <div className={classes.more}>
        <img src="../../src/images/chevron-right.svg" />
      </div>
    </div>
  );
};

export default Item;
