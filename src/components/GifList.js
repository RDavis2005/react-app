import React from 'react';
import GifItem from './GifItem';

const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id}
                    gif={image}
                    onGifSelect={props.onGifSelect} />
  });
  
  return (
<<<<<<< HEAD
    <div className= "gif-list">{gifItems}</div>
=======
    <div className="gif-list">{gifItems}</div>
>>>>>>> modal2
  );
};

export default GifList;