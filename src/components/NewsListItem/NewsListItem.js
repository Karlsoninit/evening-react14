import React from 'react';

const NewsListItem = ({ title, urlToImage, description }) => (
  <>
    <h2>{title}</h2>
    <img src={urlToImage} />
    <p>{description}</p>
  </>
);

export default NewsListItem;
