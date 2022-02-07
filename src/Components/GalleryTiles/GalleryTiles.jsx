import React from 'react';

const GalleryTiles = (props) => {
 const {tiles} = props;
 
const tileJSX = 
  tiles.map(tile => (
    <img src={tile} alt="media tile" />
  ))


  return <div className='gallery__tiles'>
    {tileJSX}
  </div>;
};

export default GalleryTiles;
