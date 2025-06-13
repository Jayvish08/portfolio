import React, { useState, useEffect } from 'react';
import { Box, Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Box>
      {isVisible && (
        <Fab
          onClick={scrollToTop}
          color="primary"
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            boxShadow: 3,
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </Box>
  );
}