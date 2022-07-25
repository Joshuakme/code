import React from "react";

function Footer() {
  return (
    <footer>
      <div
        className="attribution"
        style={{ fontSize: "11px", textAlign: "center" }}
      >
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          style={{ color: "hsl(228, 45%, 44%)" }}
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/Joshuakme"
          style={{ color: "hsl(228, 45%, 44%)" }}
        >
          Joshua Koh
        </a>
        .
      </div>
    </footer>
  );
}

export default Footer;
