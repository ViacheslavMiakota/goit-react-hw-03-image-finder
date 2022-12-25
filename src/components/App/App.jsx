import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Dna } from 'react-loader-spinner';

import Searchbar from 'components/Searchbar/Searchbar';
import { Container } from 'components/App/App.styled';
import ImgGallery from 'components/ImageGallery/ImageGallery';
import { fetchResult } from 'components/Api';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import ModalBox from 'components/Modal/Modal';

class App extends React.Component {
  state = {
    query: '',
    hits: [],
    page: 1,
    loading: false,
    totalHits: 0,
    selectedImage: null,
    shouModal: false,
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      query: event.target.elements.query.value,
      hits: [],
      page: 1,
    });
    event.target.reset();
  };

  selectImage = imageURL => {
    this.setState({ selectedImage: imageURL });
  };
  closeImage = () => {
    this.setState({ selectedImage: null });
  };

  incrementImage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };
  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });
        const { query, page } = this.state;
        const { hits, totalHits } = await fetchResult(query, page);
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          totalHits: totalHits,
          loading: false,
        }));

        if (query.length === 0) {
          toast.success(`Write at least something`);
        }
        if (totalHits === 0 || !totalHits) {
          toast.success(`Nothing found for your request :${query}`);
        }
        this.setState({ loading: false });
      } catch (error) {
        toast.error('Something went wrong : Try reloading the page.');
      }
    }
  }

  render() {
    const { loading, hits, totalHits, selectedImage } = this.state;
    return (
      <>
        <Container>
          <Searchbar handleSubmit={this.handleSubmit} />
          {loading && <Loader isLoading={loading} />}
          <ImgGallery
            isLoading={loading}
            selectImage={this.selectImage}
            hits={hits}
          />
          {totalHits > 12 && totalHits !== 0 && (
            <Button loadMoreProp={this.incrementImage} />
          )}
          {selectedImage !== null && (
            <ModalBox
              selectedImage={selectedImage}
              closeImage={this.closeImage}
            />
          )}
          <Toaster position="top-center" />
        </Container>
      </>
    );
  }
}
export default App;
