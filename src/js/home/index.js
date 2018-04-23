import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dropdown from '../dropdown';
import Article from '../article';
import './home.css';
import logo from '../../assets/images/nyt-logo.svg'
import loader from '../../assets/images/ajax-loader.gif'

import { fetchPosts } from './../redux/actions/fetchActions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {menu: true};
  }
  onChange = e => {
    this.setState((prevState, props)=> {
      return {menu: false};
    })
    this.props.fetchingPosts(e.target.value);
  }
  mapArticles = () =>{
    return this.props.news.map((article) =>
        <Article
          key={article.url}
          url={article.url}
          abstract={article.abstract}
          image= {article.multimedia}
          />
  )}
  render() {
    return (
      <div>
        <section className={ this.state.menu ? 'main'  : 'main shrunkheader' }>
          <img src={logo} alt="New York Times Logo"/>
          <form className="search" action="#" id="selections" method="post">
          <Dropdown onChange={this.onChange }/>
          </form>
        </section>
        <section>
          <div className={ this.props.loading ? "visable loader" :"loader"}>
            <img src={loader} alt="Spining Loader"/>
          </div>
          <div className="slide-up">
            <div className="article-wrapper">
              <ul className="article-section">
              {
                this.mapArticles()
              }
              </ul>
            </div>
          </div>
        </section>
        <footer>
        <p> @ Copyright 2016 INSTANEWS</p>
        </footer>
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchingPosts: category => dispatch(fetchPosts(category)),
});

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    news: state.news
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
