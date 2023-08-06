import React from "react";
import CreateListUl from "./CreateListUl";

export default function Footer() {
  function EventShowText() {
    document.querySelector(`.Footer__Email > form > p`).style = `display: inline`;
  }

  function EventHiddeText() {
    document.querySelector(`.Footer__Email > form > p`).style = `display: none`;
  }

  return (
    <div className="Footer">
      <div className="Footer__Lists">
        <img src="image/Logo.svg" alt="Logo-Aperture" />
        <strong>Photographers & videographers capturing the world around us.</strong>

        <CreateListUl
          textHead={`Pages`}
          props={[`Gear cage`, `Featured images`, `Contact`, `Style guide`, `Instructions`, `Changelog`]}
        />

        <CreateListUl
          textHead={`Business areas`}
          props={[
            `Product Photography`,
            `Architecture Photography`,
            `Drone Photography`,
            `Wildlife Photography`,
          ]}
          link={`#WeDoBlock`}
        />
      </div>

      <div className="Footer__Email">
        <div>
          <strong>Subscribe to our newsletter</strong>
          <p>Read about all the things we do.</p>
        </div>

        <form action="" method="get">
          <input
            type="email"
            name="email"
            id="emailOfFooter"
            placeholder="Your Email"
            style={{
              backgroundImage: `url("image/icon/email-icon.svg")`,
              backgroundPosition: `16px`,
              backgroundPositionX: `98%`,
            }}
            onChange={EventShowText}
            onMouseOut={EventHiddeText}
          />
          <p>Press enter</p>
        </form>
      </div>

      <div className="Footer__RightsAndIcons">
        <strong>© Aperture Photography, Inc. All rights reserved. Licensing</strong>

        <div>
          <img src="image/icon/instagram-icon.svg" alt="instagram-icon" />
          <img src="image/icon/twitter-icon.svg" alt="twitter-icon" />
          <img src="image/icon/facebook-icon.svg" alt="facebook-icon" />
        </div>
      </div>
    </div>
  );
}
