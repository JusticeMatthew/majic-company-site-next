import React from 'react';
import { ScrollerMotion } from 'scroller-motion';

const DynamicScroller = ({ children, innerWidth }) => {
  return (
    <ScrollerMotion
      disabled={innerWidth > 640 ? false : true}
      spring={{ mass: 1, stiffness: 500, damping: 50 }}
    >
      {children}
    </ScrollerMotion>
  );
};

export default DynamicScroller;
