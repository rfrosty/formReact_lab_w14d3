import React from 'react';

const StorySelector = ({stories}) => {

const options = stories.map(story => {
  return (
    <option value={story.id} key={story.id}>{story.title}</option>
  )
})

function handleChange(e) {
  stories.onStorySelected(e.target.value);
}


return (
  <select id="story-selector" defaultValue="default" onChange={handleChange}>
    <option disabled value="default">Choose a story...</option>
    {options}
  </select>
)

}

export default StorySelector;
