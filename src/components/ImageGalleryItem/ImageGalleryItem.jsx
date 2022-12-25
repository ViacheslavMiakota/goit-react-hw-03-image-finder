import React from 'react';
import {
  ImageItem,
  Image,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

const ImageGalleryItem = ({
  isLoading,
  tags,
  webformatURL,
  largeImageURL,
  selectImage,
}) => {
  return (
    <ImageItem>
      {!isLoading && (
        <Image
          src={webformatURL}
          alt={tags}
          onClick={() => selectImage(largeImageURL)}
        />
      )}
    </ImageItem>
  );
};
export default ImageGalleryItem;
