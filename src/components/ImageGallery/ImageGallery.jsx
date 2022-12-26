import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from 'components/ImageGallery/ImageGallery.styled';

const ImgGallery = ({ selectImage, hits }) => {
  return (
    <ImageGallery>
      {hits.map(hit => (
        <ImageGalleryItem
          selectImage={selectImage}
          tags={hit.tags}
          key={hit.id}
          webformatURL={hit.webformatURL}
          largeImageURL={hit.largeImageURL}
        ></ImageGalleryItem>
      ))}
    </ImageGallery>
  );
};

export default ImgGallery;
ImgGallery.propTypes = {
  hits: PropTypes.array.isRequired,
  selectImage: PropTypes.func.isRequired,
};
