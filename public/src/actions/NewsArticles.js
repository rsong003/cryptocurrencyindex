import axios from 'axios';

export const GET_NEWS_ARTICLES = 'UPDATE_NEWS_ARTICLES';


export const getNewsArticles = articles => ({
  type: GET_NEWS_ARTICLES,
  payload: articles
}) 

export const fetchNewsArticles = articles => (dispatch) => {
  axios.get('http://beta.newsapi.org/v2/top-headlines?q=crypto&category=technology&language=en&apiKey=41a95e938fe545a286c54b9d33301c15')
  .then(result => {
    dispatch(getNewsArticles(result.data.articles))
  })
}

