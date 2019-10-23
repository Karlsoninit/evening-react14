import React from 'react';

const NewsListItem = ({ title, urlToImage, description }) => (
  <div style={{ width: '200px' }}>
    <h2>{title}</h2>
    <img style={{ width: '100%' }} src={urlToImage} />
    <p>{description}</p>
  </div>
);

export default NewsListItem;
