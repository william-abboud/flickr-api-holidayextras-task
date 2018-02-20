import React from 'react';
import { string, bool, arrayOf, oneOfType } from 'prop-types';
import Collapsible from 'react-collapsible';

function Tag({ children }) {
  if (!children.trim().length) {
    return null;
  }

  return <span className="tag">{children}</span>;
}

Tag.propTypes = {
  children: string.isRequired
};

function PhotoWithDetails({
  photoURL,
  title,
  description,
  hideDescription,
  authorName,
  photoLink,
  tags
}) {
  return (
    <div className="photo-with-details">
      <img className="photo" src={photoURL} alt={title} />
      <div className="title-author-container">
        <h3 className="title">
          <a className="photo-link" href={photoLink}>
            { title.trim().length ? title : "Untitled" }
          </a>
        </h3>
        <span>by</span>
        <span className="author">author: {authorName}</span>
      </div>
      {
        (hideDescription)
          ?
            <Collapsible
              transitionTime={300}
              trigger={
                <button className="description-trigger">See more</button>
              }
            >
              <p className="description" dangerouslySetInnerHTML={{ __html: description }} />
            </Collapsible>
          :
            <p className="description" dangerouslySetInnerHTML={{ __html: description }} />
      }
      {
        (tags.length)
          ?
            <p className="tags">
              {
                Array.isArray(tags)
                  ? tags.map(tag => <Tag key={tag}>{tag}</Tag>)
                  : tags.split(" ").map(tag => <Tag key={tag}>{tag}</Tag>)
              }
            </p>
          :
            null
      }
    </div>
  );
}

PhotoWithDetails.propTypes = {
  photoURL: string.isRequired,
  title: string,
  authorName: string.isRequired,
  photoLink: string.isRequired,
  description: string.isRequired,
  tags: oneOfType([ string, arrayOf(string) ]).isRequired,
  hideDescription: bool,
};

PhotoWithDetails.defaultProps = {
  hideDescription: false,
  title: "Untitled",
};

export default PhotoWithDetails;
