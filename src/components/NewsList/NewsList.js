import React from 'react';
import NewsListItem from '../NewsListItem/NewsListItem';
const NewsList = ({ data }) => {
  return data.map(article => (
    <NewsListItem key={article.publishedAt} {...article} />
  ));
};

export default NewsList;
