import React, { Component } from 'react';
import NewsList from '../NewsList/NewsList';
import Search from '../Search/Search';
import Loader from '../Loader/Loader';
import NewsSelect from '../NewsSelect/NewsSelect';
import RenderPropHOC from '../HOC/renderPropHOC';

import { getNews } from '../api';

class News extends Component {
  state = {
    news: [],
    query: '',
    spinner: false,
    selectValue: null,
  };

  componentDidMount() {
    getNews().then(data =>
      this.setState({
        news: data,
      }),
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState.selectValue);
    console.log('this.state', this.state.selectValue);
    if (prevState.selectValue !== this.state.selectValue) {
      this.fetchNews(this.state.selectValue);
    }
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
    this.setState({
      query: evt.target.value,
    });
  };

  onChange = ({ value }) => {
    this.setState({
      selectValue: value,
    });
  };

  render() {
    const { news, spinner } = this.state;
    // console.log('re - render');
    return (
      <>
        <RenderPropHOC>
          {({ isOpen, toggle }) => {
            return (
              <>
                <button onClick={toggle}>open</button>
                {isOpen && (
                  <Search
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                  />
                )}
              </>
            );
          }}
        </RenderPropHOC>
        <NewsSelect onChange={this.onChange} />
        {spinner && <Loader />}
        {news.length > 0 && (
          <NewsList
            category={this.state.selectValue}
            data={news}
            param={this.props.match.path}
          />
        )}
      </>
    );
  }
}

export default News;
