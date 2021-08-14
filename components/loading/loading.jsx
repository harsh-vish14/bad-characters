import React from "react";

const Loading = () => {
  return (
    <div>
      <lottie-player
        src="https://assets4.lottiefiles.com/packages/lf20_dXaGKl.json"
        background="transparent"
        speed="1"
        style={{ width: "12.5rem", height: "12.5rem" }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
};

export default Loading;
