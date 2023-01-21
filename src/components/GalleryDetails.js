import React from "react";
// import GalleryContent from './GalleryContent'
// import Subtitle from './Subtitle'
import Title from "./Title";
import Place from "./Place";

export default function GalleryDetails(props) {
  return (
    <>
    <div className="container my-3">
      <Title text={props.item.title}  />

      <div className="row" key={"gallery"+props.item.id}>
        {props.item.place &&
          props.item.place.map((plac) => {
            // console.log(plac);
            return <Place item={plac} />;
          })}
      </div>
      <hr />
    </div>
    </>
  );
}
