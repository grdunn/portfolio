import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <div>
        <Outlet />
      </div>
      <footer className="c-footer">
        <div className="o-container o-container--flex">
          <div className="c-footer__copyright">
            <h3>© 2023</h3>
            <h3>Gregory Dunn</h3>
          </div>
          <div className="c-footer__grid">
            <div className="c-footer__grid--column">
              <p>grdunn@gmail.com</p>
              <p>+9144860871</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
