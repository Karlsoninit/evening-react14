import React from 'react';
import NewsListItem from '../NewsListItem/NewsListItem';
const NewsList = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {data.map(article => (
        <NewsListItem key={article.publishedAt} {...article} />
      ))}
    </div>
  );
};

export default NewsList;
