import React, { useState } from 'react';
import { HiArrowUp } from 'react-icons/hi';
import styled from 'styled-components';

const Button = styled.div`
   position: fixed;
   bottom: 0;
   right: 0;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   margin: 50px;
   color: #AF69EE;
`;

function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <Button>
      <HiArrowUp
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </Button>
  );
}

export default ScrollButton;
