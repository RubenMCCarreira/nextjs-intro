import React from 'react';

const NoSSR = () => {
  // on view page source, this text won't be returned, will be injected
  return <p>No Server Side Component</p>;
};

export default NoSSR;
