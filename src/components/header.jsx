import React from "react";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <header className="Header">
        <img src="image/Logo.svg" alt="logo" />

        <Navigation />
      </header>
    </>
  );
}
