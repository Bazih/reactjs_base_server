import React, { DOM } from 'react';
import _ from 'lodash';
import Image from '../ui/Image';
import TextBox from '../ui/TextBox';

const source = [
      {
        src: 'https://ozon-st.cdn.ngenix.net/multimedia/1013279403.jpg',
        style: {
          width: '150px',
          height: '200px'
        },
        alt: 'JavaScript и jQuery. Исчерпывающее руководство',
        text: 'This is first mini post.'
      },
      {
        src: 'https://ozon-st.cdn.ngenix.net/multimedia/1007123068.jpg',
        style: {
          width: '150px',
          height: '200px'
        },
        alt: 'Секреты JavaScript ниндзя',
        text: 'This is two mini post.'
      },
      {
        src: 'https://ozon-st.cdn.ngenix.net/multimedia/1005767303.jpg',
        style: {
          width: '150px',
          height: '200px'
        },
        alt: 'JavaScript. Подробное руководство',
        text: 'This is three mini post.'
      }
];

class BlogItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { source };
  }
  render() {
    return React.createElement(
      'div',
      null,
      _.map(
        this.state.source,
        (source, key) => (
          DOM.div({ key }, React.createElement(Image, source), React.createElement(TextBox, source))
        )
      )
    )
  }
};

export default BlogItem;
