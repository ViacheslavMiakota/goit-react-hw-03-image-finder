import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from 'components/ImageGallery/ImageGallery.styled';

const ImgGallery = ({ isLoading, selectImage, hits }) => {
  return (
    <ImageGallery>
      {hits.map(hit => (
        <ImageGalleryItem
          isLoading={isLoading}
          selectImage={selectImage}
          tags={hit.tags}
          key={hit.id}
          webformatURL={hit.webformatURL}
          largeImageURL={hit.largeImageURL}
        />
      ))}
    </ImageGallery>
  );
};

export default ImgGallery;
