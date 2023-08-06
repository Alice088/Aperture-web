import React from "react";
import Link from "./UI/Link";

export default function HelpPhotographyBlock() {
  return (
    <div className="HelpPhotographyBlock">
      <strong>Need help with photography or videography?</strong>
      <p>We're here for you!</p>

      <Link text={`Get in touch`} />
    </div>
  );
}
