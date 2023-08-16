"use client";
import React from "react";
import Snowfall from "react-snowfall";

function Layout() {
  if (typeof document === "undefined") {
    React.useLayoutEffect = React.useEffect;
  }
  return (
    <div>
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
        snowflakeCount={250}
      />
    </div>
  );
}

export default Layout;
