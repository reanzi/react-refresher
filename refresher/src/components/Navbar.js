import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper nav teal darken-3">
        <div className="container">
          <a href="/" className="brand-logo">
            Poke' Times
          </a>
          <ul className="right">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
