import React from 'react';
import { ScrollerMotion } from 'scroller-motion';

const Scroller = ({ innerWidth }) => {
  return (
    <ScrollerMotion
      disabled={innerWidth > 640 ? false : true}
      spring={{ mass: 1, stiffness: 500, damping: 50 }}
    ></ScrollerMotion>
  );
};

export default Scroller;
