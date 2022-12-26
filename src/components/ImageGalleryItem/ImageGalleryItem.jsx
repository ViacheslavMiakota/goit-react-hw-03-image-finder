import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageItem,
  Image,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

const ImageGalleryItem = ({
  tags,
  webformatURL,
  largeImageURL,
  selectImage,
}) => {
  return (
    <ImageItem>
      <Image
        src={webformatURL}
        alt={tags}
        onClick={() => selectImage(largeImageURL)}
      />
    </ImageItem>
  );
};
export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  selectImage: PropTypes.func.isRequired,
};
