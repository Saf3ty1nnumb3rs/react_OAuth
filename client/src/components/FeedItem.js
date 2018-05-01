// @flow
import React, { Component } from 'react';

class FeedItem extends Component {
  render(){
  return (
    <div className="row marketing">
      <div className="col-lg-12">
          <a href={this.props.feed.link}>
            <h4>{this.props.feed.title}</h4>
          </a>
          <p>{this.props.feed.description}</p>
      </div>
    </div>
  );
}
}

export default FeedItem; 
