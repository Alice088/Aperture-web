import React from "react";
import Link from "./UI/Link";
import InformationOfCameras from "./InformationOfCamera";

export default function ToolsWeUseBlock() {
  return (
    <div className="ToolsWeUseBlock">
      <div className="ToolsWeUseBlock__description">
        <p>The Gear cage</p>

        <strong>The tools that we use.</strong>

        <p>
          The say that "no place is boring if you've had a good night's sleep and have a pocket full of
          unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we
          actually use everyday to capture the amazing things around us.
        </p>

        <Link text={`Check it out`} />
      </div>

      <div className="ToolsWeUseBlock__photo" style={{ backgroundImage: `url("image/WeUseTools.jpeg")` }}>
        <InformationOfCameras time={`0,8"`} aperture={`f/5.6`} iso={`100`} place={`Sweden`} />
      </div>
    </div>
  );
}
