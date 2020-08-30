import React, { useContext } from "react";
import { Context } from "../Context";
import Image from "../components/Image";
import { getClass } from "../utils/imageSizer";

function Photos() {
  const { photos } = useContext(Context);
  const photoDisplay = photos.map((photo, index) => (
    <Image key={photo.id} img={photo} className={getClass(index)} />
  ));
  return <main className="photos">{photoDisplay}</main>;
}

export default Photos;
