import React from 'react';
import { Box, Typography, Card, CardContent, Stack } from '@mui/material';

const experiences = [
  {
    company: "Rablo.in",
    role: "Backend Developer Intern",
    duration: "Feb 2025 - May 2025",
    description: " Developed and maintained scalable APIs using Node.js and Express.js. Efficiently handled middleware integration, error management, and ensured robust backend support for the development team. Collaborated closely with frontend developers to deliver seamless user experiences and optimized backend performance. "
  },
  {
    company: "SpotLYT Pvt Ltd",
    role: "Data Annotator Intern",
    duration: "Feb 2025 - May 2025",
    description: "Ensured high-quality data annotations by carefully following project-specific guidelines and conducting thorough quality checks on labeled data, supporting accurate and reliable project outcomes."
  },
  // Add more experiences here
];

export default function Experience() {
  return (
    <Box id="experience" sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}>
        Experience
      </Typography>

      <Stack spacing={3}>
        {experiences.map((exp, index) => (
          <Card key={index}  sx={{ 
            height: '100%', 
            display: 'flex',
            backgroundColor: '#F1EFEC', 
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
          }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {exp.role} @ {exp.company}
              </Typography>
              <Typography variant="subtitle2" sx={{ mb: 1, color: "gray" }}>
                {exp.duration}
              </Typography>
              <Typography variant="body1">
                {exp.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
