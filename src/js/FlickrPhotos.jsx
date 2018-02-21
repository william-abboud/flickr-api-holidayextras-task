import React, { Component } from 'react';
import flickrApi from './flickr-service';
import PhotoWithDetails from './PhotoWithDetails';

class FlickrPhotos extends Component {
  constructor(props) {
    super(props);

    this.extractAuthorName = this.extractAuthorName.bind(this);

    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    flickrApi.getPublicPhotos()
      .then(response => response.json())
      .then(data => this.setState({ photos: data.items }))
      .catch(err => console.error(err));
  }

  extractAuthorName(authorProp) {
    const openBracketIdx = authorProp.indexOf("(");
    const closingBracketIdx = authorProp.indexOf(")");
    const authorInQuotes = authorProp.slice(openBracketIdx + 1, closingBracketIdx);

    return authorInQuotes.replace(/['"]+/g, '');
  }

  render() {
    const { photos } = this.state;

    if (!photos.length) {
      return null;
    }

    return (
      <div className="flickr-photos">
        {
          photos.map(photo => (
            <PhotoWithDetails
              key={photo.link}
              photoURL={photo.media.m}
              title={photo.title}
              description={photo.description}
              authorName={this.extractAuthorName(photo.author)}
              photoLink={photo.link}
              tags={photo.tags}
              hideDescription
            />
          ))
        }
      </div>
    );
  }
}

export default FlickrPhotos;
