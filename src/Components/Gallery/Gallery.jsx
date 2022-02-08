import React from "react";
import GalleryBar from "../GalleryBar/GalleryBar";
import GalleryMedia from "../GalleryMedia/GalleryMedia";
import "./Gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery">
      <GalleryBar />
      <GalleryMedia />
    </div>
  );
};

export default Gallery;
