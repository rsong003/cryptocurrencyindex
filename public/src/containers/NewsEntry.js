import React from 'react';


var NewsEntry = (props) => {
  return (
    <div>
      <div className="article-title">{props.articles.title}</div>
      <div className="article-description">{props.articles.description}</div>
      <br></br>
    </div>
    )
  }
export default NewsEntry;