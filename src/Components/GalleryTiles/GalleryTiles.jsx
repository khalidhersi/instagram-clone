import React from "react";
import "./GalleryTiles.scss";

const GalleryTiles = (props) => {
  const { tiles } = props;

  const tileJSX = tiles.map((tile) => <img className="gallery__tiles__tile" src={tile} alt="media tile" />
  );

  return <div className="gallery__tiles">
    {tileJSX}
    </div>;
};

export default GalleryTiles;
