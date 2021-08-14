import React from "react";

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
