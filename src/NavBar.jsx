import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import "./NavBar.css";
import { Link } from 'react-scroll';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
const navItems = ['Home', 'About', 'Projects', 'Experience', 'Contact'];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAuthCard, setShowAuthCard] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:713px)'); // Custom width
  const [inputCode, setInputCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (inputCode === '2342') {
      navigate("/contacts"); // Redirect on success
    } else {
      setErrorMessage('Wrong code.');
    }
  };


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <List>
      {navItems.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()} // Ensure IDs match
            spy={true}
            smooth={true}
            offset={-70} // Adjust if using fixed navbar
            duration={500}
          >
            <Button sx={{ color: 'black',display: "block",  margin: "1rem" }}>
            {item}
          </Button>
  </Link>
))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" component="nav" sx={{padding: 0.8, background: 'linear-gradient(to right, #7C4585, #3D365C)' }}>
        <Toolbar  sx={{ minHeight: 80 }}>

          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant="h4" sx={{ flexGrow: 1 }}>
          <Button className='hidden' onClick={() => setShowAuthCard(true)}>
  Portfolio.
</Button>
          </Typography>

          {showAuthCard && (
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          width: 300,
          textAlign: "center",
        }}
      >
        {/* Close Button */}
        <IconButton
          sx={{ position: "absolute", top: 8, right: 8 }}
          onClick={() => setShowAuthCard(false)}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" sx={{ mb: 2, color: 'black' }}>
          Secret Zone
        </Typography>
        <TextField
          label="Enter Code"
          variant="outlined"
          fullWidth
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          sx={{ mb: 2 }}
        />
        {errorMessage && (
          <Typography color="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Typography>
        )}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    )}

          {!isMobile && (
            <Box>
                {navItems.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()} // Ensure IDs match
            spy={true}
            smooth={true}
            offset={-70} // Adjust if using fixed navbar
            duration={500}
          >
            <Button sx={{ color: '#fff', marginRight: "1rem" }}>
            {item}
          </Button>
  </Link>
))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
