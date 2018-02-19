import React from 'react';
import { string, arrayOf, oneOfType } from 'prop-types';

function PhotoWithDetails({
  photoURL,
  title,
  description,
  authorLink,
  photoLink,
  tags
}) {
  return (
    <div>
      <img src={photoURL} alt={description} />
      <h2>{title}</h2>
      <a href={authorLink}>author</a>
      <a href={photoLink}>photo link</a>
      <p>{description}</p>
      <p>
        {tags.map(tag => <span key={tag}>{ tag }</span>)}
      </p>
    </div>
  );
}

PhotoWithDetails.propTypes = {
  photoURL: string.isRequired,
  title: string.isRequired,
  authorLink: string.isRequired,
  photoLink: string.isRequired,
  description: string.isRequired,
  tags: oneOfType([ string, arrayOf(string) ]).isRequired
};

export default PhotoWithDetails;
