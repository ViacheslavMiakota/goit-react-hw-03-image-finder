import React from 'react';
import PropTypes from 'prop-types';
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
ImageGalleryItem.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  selectImage: PropTypes.string.isRequired,
};
