import React from "react";
import Button from "./UI/Button";

export default function Navigation() {
  return (
    <nav>
      <Button text={`Business areas`} />
      <Button text={`Featured images`} />
      <Button text={`Gear cage`} />
      <Button text={`Contact`} />
      <Button text={`Get template`} special={`button--white`} />
    </nav>
  );
}
