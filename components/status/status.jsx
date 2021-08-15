import React from "react";

/**
 * Creating reusable component
 * @param {String} status
 * @return {Component}
 */

const Status = ({ status }) => {
  return (
    <div
      style={{
        color: status.toLowerCase() == "alive" ? "green" : "red",
      }}
    >
      {status}
    </div>
  );
};

export default Status;
