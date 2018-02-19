import React, { Component } from 'react';
import flickrApi from './flickr-service';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    flickrApi.getPublicPhotos()
      .then(response => response.json())
      .then((data) => {
        this.setState({ photos: data });
      });
  }

  render() {
    return <div>Hello World</div>;
  }
}

export default App;
