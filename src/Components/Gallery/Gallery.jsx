import React from 'react';
import GalleryBar from '../GalleryBar/GalleryBar';
import GalleryMedia from '../GalleryMedia/GalleryMedia';

const Gallery = () => {
  return <div className='gallery'>
      <GalleryBar/>
      <GalleryMedia/>
  </div>;
};

export default Gallery;
