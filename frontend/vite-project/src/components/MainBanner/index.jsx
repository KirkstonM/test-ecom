import React from 'react';
import { Box, Container } from '@mui/material';
import bgImage from "../../assets/images/banner-img.webp";

const MainBanner = () => {
  return (
   <Box>
     <picture>
        <source srcSet={bgImage} type="image/webp" />
        <img src={bgImage} alt="Main banner" style={{ width: '100%', height: 'auto' }} />
      </picture>
   </Box>
  )
}

export default MainBanner