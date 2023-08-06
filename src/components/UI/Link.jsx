import React from "react";

export default function Link({ text }) {
  return (
    <div className="link">
      <img src="image/icon/iconLinks.svg" alt="black" />
      <a href="#no-link-yet" target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </div>
  );
}
