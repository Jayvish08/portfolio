import React from 'react';
import { FaJava, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa'; // Importing icons
import { SiJavascript, SiBootstrap, SiExpress, SiMongodb, SiOracle } from 'react-icons/si'; // Additional icons
import { Box, Typography } from '@mui/material';


export default function TechStack() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 4,
      }}
    >
      <Box sx={{ display: 'flex', gap: 4 , flexWrap: 'wrap'}}>
        {/* Tech Icons with Colors */}
        <Box sx={{ textAlign: 'center' }}>
          <FaJava size={40} color="#f89820" /> {/* Java - Orange */}
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <FaNodeJs size={40} color="#68A063" /> {/* Node.js - Green */}
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <FaReact size={40} color="#61DAFB" /> {/* React - Blue */}
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <SiExpress size={40} color="#000000" /> {/* Express.js - Black */}
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <SiJavascript size={40} color="#f7df1e" /> {/* JavaScript - Yellow */}
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <SiBootstrap size={40} color="#7952b3" /> {/* Bootstrap - Purple */}
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <FaHtml5 size={40} color="#e34c26" /> {/* HTML5 - Orange */}
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <FaCss3Alt size={40} color="#264de4" /> {/* CSS3 - Blue */}
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <FaGitAlt size={40} color="#f34f29" /> {/* Git - Red */}
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <FaGithub size={40} color="#000000" /> {/* GitHub - Black */}
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <SiMongodb size={40} color="#47A248" /> {/* MongoDB - Green */}
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <SiOracle size={40} color="#f80000" /> {/* Oracle - Red */}
        </Box>
      </Box>
    </Box>
  );
}