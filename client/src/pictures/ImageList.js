import React from 'react';
import './ImageList.css'
import Image from './Image';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <Image key={image.id} image = {image}/>;
    });
    return <div className="image-list">{images}</div>;
}

export default ImageList;