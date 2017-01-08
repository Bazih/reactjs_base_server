import React, { DOM } from 'react';
import BlogItem from './BlogItem';

class BlogList extends React.Component {
  render() {
    return (
      DOM.div(null, React.createElement(BlogItem))
    )
  }
};

export default BlogList;
