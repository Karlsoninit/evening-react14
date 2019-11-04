import React, { Component } from 'react';
import { getNews } from '../../api';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';
class SomeArticle extends Component {
  state = {
    article: null,
  };
  componentDidMount() {
    const parsed = queryString.parse(this.props.match.params.someArticle);
    console.log('parsed', parsed);
    console.log('parsed.category', parsed.category);
    console.log(this.props.match);
    // console.log('someArticle', this.props.match.params);
    // const category = this.props.location.state.category;

    getNews(parsed.category === 'null' ? 'apple' : parsed.category).then(data =>
      this.setState({
        article: data.find(elem => {
          return elem.publishedAt === parsed.search;
        }),
      }),
    );
  }
  back = () => <Redirect to="/newss" />;

  render() {
    // const { author, content } = this.state.article;
    console.log('article', this.state.article);
    console.log('history SomeArticle', this.props.match.params.someArticle);
    return (
      this.state.article !== null && (
        <>
          <h2>{this.state.article.author}</h2>
          <p>{this.state.article.content}</p>
          <img src={this.state.article.urlToImage} />
          <button key="button" onClick={this.back}>
            back
          </button>
        </>
      )
    );
  }
}

export default SomeArticle;
