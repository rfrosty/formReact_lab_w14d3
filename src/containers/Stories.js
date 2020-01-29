import React, { Component } from 'react';
import StorySelector from '../components/StorySelector'
import Story from '../components/Story.js'

class Stories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      selectedStoryId: ''
    }
    this.handleStorySelected = this.handleStorySelected.bind(this);
  }

//A Promise (chain) says 'I'll do this thing, no matter how long it takes, keep doing stuff in background i.e. rendering'.
// Fetch starts off a promise chain.
// Implicit arrow function takes place in the parameter braces for method.
  componentDidMount() {
    const url1 = "https://hacker-news.firebaseio.com/v0/topstories.json";
    fetch(url1)
    .then((res) => res.json())
    .then((ids) => ids.map((storyId) => {
      return `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
    }))
    .then((urlList) => {

      const slicedArray = urlList.slice(0, 20)
      return slicedArray.map((url) => {
        return fetch(url).then(res => res.json())
    })
  })
  .then(requests => {
    return Promise.all(requests)
  })
  .then(res => this.setState({stories: res}))
}

handleStorySelected(id) {
  this.setState({selectedStoryId: id})
}


  render(){

    // const selectedStory = 5;
    const selectedStory = this.state.stories
    .find(story => story.id == this.state.selectedStoryId);


    return(
      <div>
        <h2>Story Container</h2>
        <StorySelector stories={this.state.stories} onStorySelected={this.handleStorySelected} /><br/>
        <Story story={selectedStory} />
      </div>
    );
  }

}

export default Stories;
