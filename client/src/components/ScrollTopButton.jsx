import React, { useState } from 'react';
import { IoArrowUp } from 'react-icons/io';
import styled from 'styled-components';

const Button = styled.div`
   position: fixed;
   bottom: 0;
   right: 0;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   margin: 40px;
   color: #303030;
`;

function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(true);
    } else if (scrolled <= 300) {
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
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </Button>
  );
}

export default ScrollButton;
