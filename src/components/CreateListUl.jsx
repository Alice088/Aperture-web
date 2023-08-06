import React from "react";

export default function CreateListUl({ props, textHead, link }) {
  const listItems = props.map((item) => <li key={item}>{item}</li>);

  if (link) {
    return (
      <div className="List">
        <p>{textHead}</p>
        <ul>
          <a href={link}>{listItems}</a>
        </ul>
      </div>
    );
  }
  else {
    return (
      <div className="List">
        <p>{textHead}</p>
        <ul>{listItems}</ul>
      </div>
    );
  }
}
