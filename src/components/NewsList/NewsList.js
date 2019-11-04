import React from 'react';
import NewsListItem from '../NewsListItem/NewsListItem';
const NewsList = ({ data, category, param }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {data.map(article => {
        console.log(article);
        return (
          <NewsListItem
            category={category}
            key={article.publishedAt}
            param={param}
            {...article}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
