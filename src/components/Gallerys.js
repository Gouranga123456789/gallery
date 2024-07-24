import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import './Gallery.css';

// Static imports for the images
import img1 from '../images/1.webp';
import img2 from '../images/2.webp';
import img3 from '../images/3.webp';
import img4 from '../images/4.webp';
import img5 from '../images/5.webp';
import img6 from '../images/6.webp';
import img7 from '../images/7.webp';
import img8 from '../images/8.webp';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const navigateImages = (direction) => {
        const currentIndex = images.indexOf(selectedImage);
        const newIndex = (currentIndex + direction + images.length) % images.length;
        setSelectedImage(images[newIndex]);
    };

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <ImageItem key={index} src={image} onClick={() => openModal(image)} />
            ))}
            {selectedImage && 
                <Modal 
                    src={selectedImage} 
                    onClose={closeModal} 
                    onNext={() => navigateImages(1)} 
                    onPrev={() => navigateImages(-1)} 
                />}
        </div>
    );
};

export default Gallery;
