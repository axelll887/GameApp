import React from "react";

function HomePage() {
  return (
    <div
      style={{
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          color: "#060b26",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        Welcome to your digital boardgame collection!
      </h1>
    </div>
  );
}

export default HomePage;
