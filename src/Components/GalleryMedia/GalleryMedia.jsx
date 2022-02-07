import React from 'react';
import data from "../../assets/data/data.json";
import GalleryTiles from '../GalleryTiles/GalleryTiles';

const GalleryMedia = () => {
  return <div className='gallery__media__container'>
    <GalleryTiles tiles={data.tiles} />
  </div>;
};

export default GalleryMedia;
