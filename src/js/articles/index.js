import React from 'react';
import {connect} from 'react-redux'
import Article from '../article';

const Articles = ({ articles }) => {
    const content = articles.map((article) =>
        <Article
          key={article.url}
          abstract={article.abstract}
          image= {article.multimedia}
          />
    )
    return (
        <div>
            {content}
        </div>
    )  
}
const mapStateToProps = (state) => {
    return {
        articles: state.news
    };
  }

export default connect(mapStateToProps)(Articles)