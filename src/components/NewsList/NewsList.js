import React from 'react';
import NewsListItem from '../NewsListItem/NewsListItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import showArticle from '../animations/DropDownMenu/DropDown.module.css';
console.log(showArticle);
const NewsList = ({ data, category, param }) => {
  return (
    <TransitionGroup style={{ display: 'flex', flexWrap: 'wrap' }}>
      {data.map(article => {
        console.log(article);
        return (
          <CSSTransition
            key={article.publishedAt}
            timeout={1000}
            classNames={showArticle}
          >
            <NewsListItem category={category} param={param} {...article} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export default NewsList;
