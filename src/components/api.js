import axios from 'axios';

export const getNews = (query = 'apple') => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=86efb1d9e5074721b8f151f282c7bcf7`,
    )
    .then(data => data.data.articles);
};
