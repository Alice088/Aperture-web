import React from "react";
import PhotoTemplateWeDo from "./PhotoTemplateWeDo";

export default function WeDoPlaceOfPhoto() {
  return (
    <article id="WeDoBlock">
      <h2>What we do.</h2>
      <p>The areas that we're specialized in.</p>

      <div className="WeDoPlaceOfPhoto">
        <PhotoTemplateWeDo
          photo={"image/Architecture.jpeg"}
          alt={"Architecture photo"}
          header={"Architecture Photography"}
          text={`Aenean porta neque eget consequat fringilla. Vestibulum ultrices,
          orci nec egestas pharetra, ligula est semper enim, nec auctor sapien
          leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.`}
        />

        <PhotoTemplateWeDo
          photo={"image/Drone.jpeg"}
          alt={"Drone Photography"}
          header={"Drone Photography"}
          text={`Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.
          Duis tristique sed lorem a vestibulum. Cras commodo consequat orci,in convallis risus
          egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius,
          faucibus libero ac, cursus quam.`}
        />

        <PhotoTemplateWeDo
          photo={"image/Product.jpeg"}
          alt={"Product Photography"}
          header={"Product Photography"}
          text={`Cras commodo consequat orci, in convallis risus egestas non.
          Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.`}
        />

        <PhotoTemplateWeDo
          photo={"image/Wildlife.jpeg"}
          alt={"Wildlife Photography"}
          header={"Wildlife Photography"}
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.`}
        />
      </div>
    </article>
  );
}
