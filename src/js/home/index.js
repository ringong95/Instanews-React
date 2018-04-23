import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dropdown from '../dropdown';
import Articles from '../articles';
import './home.css';
import logo from '../../assets/images/nyt-logo.svg'
import loader from '../../assets/images/ajax-loader.gif'

import { fetchPosts } from './../redux/actions/fetchActions';

class Home extends Component {
  onChange = e => {
    console.log(e.target.value);
    this.props.fetchingPosts(e.target.value);
  }
  render() {
    return (
      <div>
        <section className="main">
          <img src={logo} alt="New York Times Logo"/>
          <form className="search" action="#" id="selections" method="post">
          <Dropdown onChange={this.onChange }/>
          </form>
        </section>
        <section>
          <div className="loader">
            <img src={loader} alt="Spining Loader"/>
          </div>
          <div className="slide-up">
            <div className="article-wrapper">
              <ul className="article-section">
              <Articles/>
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
   news: state.news
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
