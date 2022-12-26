import axios from 'axios';

export const fetchResult = async (query, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=30621074-d48d19c4627e2c21ed80bf0c7&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
