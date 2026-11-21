"use client";
import Snowfall from "react-snowfall";

function SnowFall() {
  return (
    <div>
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 99999,
        }}
        snowflakeCount={250}
      />
    </div>
  );
}

export default SnowFall;
