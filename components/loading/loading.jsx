import React from "react";

const Loading = () => {
  return (
    <div>
      <lottie-player
        src="https://assets4.lottiefiles.com/packages/lf20_dXaGKl.json"
        background="transparent"
        speed="1"
        style={{ width: "200px", height: "200px" }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
};

export default Loading;
