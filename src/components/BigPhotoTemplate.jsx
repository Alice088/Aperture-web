import React from "react";
import InformationOfCamera from "./InformationOfCamera";

export default function BigPhotoTemplate({ photo, header, description, ...camera }) {
  return (
    <div className="BigPhotoTemplate" style={{ backgroundImage: `url(${photo})` }}>
      <strong>{header}</strong>
      <p>{description}</p>

      <InformationOfCamera
        time={camera.camera.time}
        aperture={camera.camera.aperture}
        iso={camera.camera.iso}
        place={camera.camera.place}
      />
    </div>
  );
}
