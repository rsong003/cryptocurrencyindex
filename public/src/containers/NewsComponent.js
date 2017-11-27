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
        {this.props.articles.newsArticles.map((article, i) => {
          return <NewsEntry key={i} articles={article}/>
        })}
        </div>
      </div>
    )
  }
}
