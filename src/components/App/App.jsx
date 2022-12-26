import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Searchbar from 'components/Searchbar/Searchbar';
import { Container } from 'components/App/App.styled';
import ImgGallery from 'components/ImageGallery/ImageGallery';
import { fetchResult } from 'Services/Api';
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

  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });
        const { query, page } = this.state;
        const { hits, totalHits } = await fetchResult(query, page);

        if (!totalHits) {
          toast.success(`Nothing found for your request :${query}`);
          return;
        }

        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          totalHits: totalHits,
          loading: false,
        }));
      } catch (error) {
        toast.error('Something went wrong : Try reloading the page.');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSubmit = query => {
    this.setState({
      query,
      hits: [],
      page: 1,
    });
  };

  incrementImage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  selectImage = imageURL => {
    this.setState({ selectedImage: imageURL });
  };
  closeImage = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { loading, hits, totalHits, selectedImage } = this.state;
    return (
      <>
        <Container>
          <Searchbar handleSubmit={this.handleSubmit} />
          {loading && <Loader isLoading={loading} />}
          {hits.length > 0 && (
            <ImgGallery selectImage={this.selectImage} hits={hits} />
          )}

          {Boolean(totalHits) && totalHits !== hits.length && (
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
