import React from "react";
import Link from "./UI/Link";

export default function PhotoTemplateWeDo({ photo, alt, header, text }) {
  return (
    <div className="PhotoTemplateWeDo">
      <img src={photo} alt={alt} className="blurPhoto" />
      {/* да мне самому больно далать класс для фото спецаильно для блюра, */}
      {/* но друго варианта я не нашел, я еще нубик */}

      <div className="PhotoTemplateWeDo__textAndButtom">
        <strong>{header}</strong>
        <p>{text}</p>

        <Link text={`Read more`} />
      </div>
    </div>
  );
}
