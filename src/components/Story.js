import React from 'react';

const Story = (props) => {
  if (!props.story) return null;
  return (
  <a href={props.story.url} target="blank">Link to Story</a>
  )
}
export default Story;
