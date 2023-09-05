
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { hasArrow } from 'styled-system';
import { animated, useSpring } from 'react-spring';



const Popover = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  & ${hasArrow} {
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-left: 12px solid;
      z-index: 1;
    }
  }

  &.open {
    animation: popover-open 0.3s ease-in-out;
  }
`;

const PopoverContent = styled.div`
  background-color: #fff;
  padding: 10px;
`;

const popoverSpring = useSpring({
  to: {
    width: 200,
  },
});

const [open, setOpen] = useState(false);

const handleClick = () => {
  setOpen(!open);
};

export default function PopoverComponent() {
  return (
    <div>
      <button onClick={handleClick}>Open Popover</button>
      <Popover
        open={open}
        spring={popoverSpring}
      >
        <PopoverContent>
          This is the popover content.
        </PopoverContent>
      </Popover>
    </div>
  );
}

const popoverOpen = {
  from: {
    width: 0,
  },
  to: {
    width: 200,
  },
};
