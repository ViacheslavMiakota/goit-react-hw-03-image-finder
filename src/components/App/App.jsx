import React from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import { Container } from 'components/App/App.styled';

class App extends React.Component {
  state = {};
  render() {
    return (
      <Container>
        <Searchbar />
        {/* // <ImageGallery />
        // <ImageGalleryItem />
        // <Loader />
        // <Button />
        // <Modal /> */}
      </Container>
    );
  }
}
export default App;
