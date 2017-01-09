import React, { DOM } from 'react';

const Image = ({ src, style:{width, height}, alt }) => (
  DOM.img(
    {
      src: src,
      style: {
        width: width,
        height: height
      },
      alt: alt
    }
  )
);

export default Image;
