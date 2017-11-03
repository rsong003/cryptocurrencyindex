import {GET_NEWS_ARTICLES} from '../actions/NewsArticles.js'

const INITIAL_STATE = {topArticle: {}, newsArticles: []}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_NEWS_ARTICLES:
      return Object.assign({}, state, {topArticle: action.payload[0], newsArticles: action.payload});
    default :
      return state;
  }
}
