import React from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';

const projects = [
  {
    title: "Wanderlust (Airbnb Clone)",
    description: "A full-stack travel listing application built using the MERN stack. Allows users to create, edit, and manage travel stays with authentication and authorization.",
    link: "https://github.com/Jayvish08/Wanderlust.git",
  },
  {
    title: "Hospital Management System",
    description: "A Java Swing-based desktop application to manage hospital data with multi-user access, integrated with Oracle database.",
    link: "https://github.com/Jayvish08/Hospital-Management-.git",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio site built using React.js and Material-UI to showcase my skills, experience, and projects.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#DFD0B8", display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' } }}> {/* Centered and Width Controlled */}
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
          Here are some of My Projects
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: 'center', mb: 5 }}>
          Have a look at some of the projects I have worked on.
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid key={index} sx={{ marginBottom: 3}}> {/* 12 grid => full width on mobile, 6 grid => half width */}
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  boxShadow: 3,
                  borderRadius: 3,
                  p: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={project.link} target="_blank" sx={{ mt: 1 }}>
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
