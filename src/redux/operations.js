import axios from 'axios';
import { getNewsStart, getNewsSuccess, getNewsError } from './actions';

// axios.default.baseUrl =
//   'https://newsapi.org/v2/everything?q=bitcoin&apiKey=86efb1d9e5074721b8f151f282c7bcf7';

const getNews = () => dispatch => {
  console.log('dispatch', dispatch);
  dispatch(getNewsStart());
  axios
    .get(
      'https://newsapi.org/v2/everything?q=bitcoin&apiKey=86efb1d9e5074721b8f151f282c7bcf7',
    )
    .then(data => dispatch(getNewsSuccess(data.data.articles)))
    .catch(error => dispatch(getNewsError(error)));
};

export default getNews;
