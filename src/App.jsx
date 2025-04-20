import React from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <nav></nav>
        <Outlet />
      </div>
    </>
  );
}

export default App;
