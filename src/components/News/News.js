import React, { Component } from 'react';
import NewsList from '../NewsList/NewsList';
import Search from '../Search/Search';
import Loader from '../Loader/Loader';
import NewsSelect from '../NewsSelect/NewsSelect';

import { getNews } from '../api';
class News extends Component {
  state = {
    news: [],
    query: '',
    spinner: false,
  };

  componentDidMount() {
    getNews().then(data =>
      this.setState({
        news: data,
      }),
    );
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevState', prevState.query);
    // console.log('this.state', this.state.query);
  }

  fetchNews = query => {
    this.setState({
      spinner: true,
    });
    getNews(query).then(data =>
      this.setState({
        news: data,
        spinner: false,
      }),
    );
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.fetchNews(this.state.query);
    console.log('get form value', evt.target);
  };

  handleChange = evt => {
    // console.log(evt.target.value);
    this.setState({
      query: evt.target.value,
    });
  };

  render() {
    const { news, spinner } = this.state;
    return (
      <>
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <NewsSelect />
        {spinner && <Loader />}
        {news.length > 0 && <NewsList data={news} />}
      </>
    );
  }
}

export default News;
