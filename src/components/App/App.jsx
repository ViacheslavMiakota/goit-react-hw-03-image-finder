import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Searchbar from 'components/Searchbar/Searchbar';
import { Container } from 'components/App/App.styled';
import ImgGallery from 'components/ImageGallery/ImageGallery';
import { fetchResult } from 'components/Api';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

class App extends React.Component {
  state = {
    query: '',
    hits: [],
    page: 1,
    loading: false,
    totalHits: 0,
    selectedImage: null,
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      query: event.target.elements.query,
      hits: [],
      page: 1,
    });
    console.log(event.target.elements.query);
    event.target.reset();
  };
  // selectImage = imageURL => {
  //   this.setState({ selectedImage: imageURL });
  // };
  // incrementImage = () => {
  //   this.setState(prevState => {
  //     return { page: prevState.page + 1 };
  //   });
  // };
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

        if (totalHits === 0 || !totalHits) {
          Notify.warning('Nothing found for your request :()');
        }
        this.setState({ loading: false });
      } catch (error) {
        Notify.error('Something went wrong : Try reloading the page.');
      }
    }
  }

  render() {
    const { loading, hits, selectedImage, totalHits } = this.state;

    return (
      <>
        <Container>
          <Searchbar handleSubmit={this.handleSubmit} />
          <Loader />
          <ImgGallery
            isLoading={loading}
            selectImage={this.selectImage}
            hits={hits}
          />
          {totalHits > 12 && <Button loadMoreProp={this.incrementImage} />}
          <Modal selectedImage={selectedImage} />
        </Container>
      </>
    );
  }
}
export default App;
