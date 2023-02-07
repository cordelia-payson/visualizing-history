import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import ReactCardFlip from 'react-card-flip';
import PhotoBack from './PhotoBack.jsx';
import PhotoFront from './PhotoFront.jsx';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ImageContainer = styled.div`
`;

const Card = styled.div`
  /* height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.height}px`}; */
  margin: 30px;
`;

const CardFront = styled(Card)`
  margin: none;
 `;

const Image = styled.img`
  height: auto;
  display: inline-block;
  width: 100%;
`;

const CardBack = styled(Card)`
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.height}px`};
  display: inline-block;
`;

const Photo = React.forwardRef((props, ref) => {
  const { image } = props;
  const [flipped, setFlipped] = useState(false);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const imageRef = useRef();

  // const getImageSize = () => {
  //   setWidth(imageRef.current.clientWidth);
  //   setHeight(imageRef.current.clientHeight);
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', getImageSize);
  // }, []);

  // useEffect(() => {
  //   getImageSize();
  // }, []);

  const handleClick = (evt) => {
    evt.preventDefault();
    setFlipped(!flipped);
  };
  return (
    <ImageContainer ref={ref}>

      <CardFront onClick={(evt) => handleOpen()}>
        <Image
          src={image.image}
          loading="lazy"
          ref={imageRef}
        />
      </CardFront>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <PhotoBack image={image} />
          </Box>
        </Fade>

      </Modal>

    </ImageContainer>
  );
});

export default Photo;

// code for card flip - leaving here in case I return to this design
// return (
//   <ImageContainer ref={ref}>
//     <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
//       {/* <CardFront onClick={(evt) => handleClick(evt)}> */}
//       <CardFront onClick={(evt) => handleOpen()}>
//         <Image
//           src={image.image}
//           loading="lazy"
//           ref={imageRef}
//         />
//       </CardFront>
//       <CardBack
//         isFlipped={flipped}
//         width={width}
//         height={height}
//       >
//         <PhotoBack
//           image={image}
//           width={width}
//           height={height}
//           handleClick={handleClick}
//           flipped={flipped}
//         />
//       </CardBack>
//     </ReactCardFlip>

//   </ImageContainer>
// );
