import React from "react";

export default function InformationOfCamera({ time, aperture, iso, place }) {
  return (
    <div className="PhotoInfo">
      <img src="image/icon/TimeInfoOfCamera.svg" alt="Time Info Of Camera" />
      <strong>{time}</strong>

      <img src="image/icon/apertureOfCamera.svg" alt="aperture OfC Camera" />
      <strong>{aperture}</strong>

      <img src="image/icon/isoOfCamera.svg" alt="iso Of Camera" />
      <strong>{iso}</strong>

      <img src="image/icon/PlaceOfPhoto.svg" alt="Place of Camera" />
      <strong>{place}</strong>
    </div>
  );
}
