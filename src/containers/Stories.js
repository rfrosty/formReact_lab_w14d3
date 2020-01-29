import React, { Component } from 'react';

class Stories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // storyDetail: '',
      ids: []
      // selectedId: []
    }
  }

  componentDidMount() {
    const url1 = "https://hacker-news.firebaseio.com/v0/topstories.json";
    fetch(url1)
    .then(res => res.json())
    .then(ids => this.setState({ids: ids}))
    .catch(err => console.err());
  }

  render(){
    return(
      <p>I am a stories container.</p>
    )
  }

}


export default Stories;
