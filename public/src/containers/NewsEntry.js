import React from 'react';


var NewsEntry = (props) => {
  console.log(props, 'this is the NewsEntry')
  return (
    <div>
      <div className="article-title">{props.articles.title}</div>
      <div className="article-description">{props.articles.description}</div>
      <br></br>
    </div>
    )
  }
export default NewsEntry;