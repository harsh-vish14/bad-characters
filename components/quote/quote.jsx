import React from "react";
import classes from "./quote.module.scss";

/**
 * reusable quote component
 * @param {String} message
 * @return {Component}
 */
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
