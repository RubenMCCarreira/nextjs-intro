import React from 'react';

// any route
const NoteAnyPage = (props) => {
  const { any } = props.url.query;

  return <div>Note Any Page - {!!any && any.join('/')}</div>;
};

export default NoteAnyPage;
