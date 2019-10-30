import React, { Component } from 'react';
import { getNews } from '../../api';
class SomeArticle extends Component {
  state = {
    article: null,
  };
  componentDidMount() {
    //   this.props.location.state.category
    getNews().then(data =>
      this.setState({
        article: data.find(
          elem => elem.publishedAt === this.props.match.params.someArticle,
        ),
      }),
    );
  }
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
        </>
      )
    );
  }
}

export default SomeArticle;
