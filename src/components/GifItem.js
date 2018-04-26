import React from 'react';

const GifItem = ({gif, onGifSelect}) => {
  return (
<<<<<<< HEAD
    <div className="gif-item">
      <img src={image.gif.images.downsized.url} />
=======
    <div className="gif-item" onClick={() => onGifSelect(gif)}>
      <img src={gif.images.downsized.url} />
>>>>>>> modal2
    </div>
  )
};

export default GifItem;