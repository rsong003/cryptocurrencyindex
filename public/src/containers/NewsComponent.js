import React, {Component} from 'react'
import NewsEntry from './NewsEntry.js'


export default class NewsComponent extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      
      <div>
        <div>
        {this.props.articles.newsArticles.map(article => {
          return <NewsEntry articles={article}/>
        })}
        </div>
      </div>
    )
  }
}