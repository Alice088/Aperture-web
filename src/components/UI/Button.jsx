import React from "react";

export default function Button({ text, special }) {
  if (special) {
    return <button className={special}>{text}</button>;
  } else {
    return <button className="button">{text}</button>;
  }
}
