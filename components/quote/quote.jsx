import React from "react";
import classes from "./quote.module.scss";
const Quote = ({ message }) => {
  return (
    <div className={classes.quote}>
      <div className={classes.quoteIcon}>
        <img src="/images/quote.svg" />
      </div>
      <div className={classes.quoteMessage}>{message}</div>
    </div>
  );
};

export default Quote;
