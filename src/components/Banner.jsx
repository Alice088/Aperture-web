import React from "react";
import InformationOfCamera from "./InformationOfCamera";

export default function Banner() {
  return (
    <div className="Banner">
      <img src="image/banner.png" alt="landscape-banner" />

      <strong>Photographer & Filmmaker</strong>
      <h2>Aperture Studios</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
        tristique. Duiscursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
        erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
        tristiqueposuere.
      </p>

      <InformationOfCamera time={`1/2000s`} aperture={`f/11`} iso={`100`} place={`Iceland`} />
    </div>
  );
}
