import React from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  return(
  <>
   <div>
    <nav>
      <Link to="/">Authentic</Link>
      <Link to="home">home</Link>
    </nav>
    <Outlet/>
   </div>
  </>
  );
}

export default App;
