import React, { DOM } from 'react';
import BlogList from './BlogList';

class BlogPage extends React.Component {
  render() {
    return (
      DOM.div(null, React.createElement(BlogList))
    )
  }
};

export default BlogPage;
