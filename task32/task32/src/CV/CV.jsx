import React from 'react';
import {Container, Box, Chip, Avatar, Typography, LinearProgress, Stack} from '@mui/material';
import Grid from '@mui/material/Grid2';
import me from '../img/me.jpg';

function Cv() {
    return (
        <Container maxWidth="md" sx={{ position: 'relative' }}>
            <Box
                sx={{
                    bgcolor: '#cfe8fc',
                    height: '150vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 3,
                    borderRadius: 2,
                    top: 0,
                }}
            >
                <Chip label={<Typography variant="h5" fontWeight="bold">Serhii Zhitnik</Typography>} color="primary" sx={{ mb: 2, p: 2 }} />
                <Chip label={<Typography variant="subtitle1">Web Developer</Typography>} color="primary" sx={{ mb: 2, p: 2 }} />
                <Avatar alt="Serhii Zhitnik" src={me} sx={{ width: 150, height: 150, mb: 3 }} />
                <Box textAlign="center" width='100'>
                    <Grid container spacing={2}>
                        <Stack>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant="h6" fontWeight="bold" mb={1}>PROFILE</Typography>
                                <Box sx={{ p: 0, border: '1px solid #ccc', borderRadius: 2, bgcolor: 'white' }}>
                                    <Typography variant="body1" color="text.secondary">
                                        A disciplined, motivated learner <br/> passionate about web development. <br/>
                                        Focused on mastering <br/> new technologies, improving skills, <br/> and achieving professional growth.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant="h6" fontWeight="bold" mb={1}>CONTACT ME</Typography>
                                <Box sx={{ p: 0, border: '1px solid #ccc', borderRadius: 2, bgcolor: 'white' }}>
                                    <Typography variant="body1" color="text.secondary">
                                        0636252454 <br/>
                                        sergeyzhitnik2004@gmail.com <br/>
                                        Pr. Dobrovolskogo 130/4
                                    </Typography>
                                </Box>
                            </Grid>
                            <Box width="100%" maxWidth={600} mt={3}>
                                <Typography variant="h6" fontWeight="bold" mb={1}>Skills</Typography>
                                {[
                                    { label: "JavaScript", value: 90 },
                                    { label: "React", value: 65 },
                                    { label: "HTML / CSS", value: 80 },
                                    {label: 'SQL', value: 70},
                                    {label: 'Node.js', value: 40},
                                    {label: 'C#', value: 50},
                                    {label: 'Java', value: 40}
                                ].map((skill, index) => (
                                    <Box key={index} display="flex" alignItems="center" mb={2}>
                                        <Typography variant="subtitle1" sx={{ minWidth: 100 }}>{skill.label}</Typography>
                                        <LinearProgress variant="determinate" value={skill.value} sx={{ flexGrow: 1, height: 10, borderRadius: 5 }} />
                                    </Box>
                                ))}
                            </Box>
                        </Stack>
                        <Stack>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography variant="h6" fontWeight="bold" mb={1}>EDUCATION</Typography>
                                <Box sx={{ p: 0, border: '1px solid #ccc', borderRadius: 2, bgcolor: 'white' }}>
                                    <Typography variant="subtitle1" fontWeight="bold">ODESA POLYTECHNIC</Typography>
                                    <Typography variant="body2" color="text.secondary">Bachelor’s Degree  <br/>in Information Technology and Programming (Ongoing)</Typography>
                                    <Typography variant="subtitle1" fontWeight="bold" mt={1}>HILLEL IT SCHOOL</Typography>
                                    <Typography variant="body2" color="text.secondary">Currently enrolled in the Front-End Pro course.</Typography>
                                </Box>
                                <Grid/>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box width="100%" maxWidth={600} mt={3}>
                                        <Typography variant="h6" fontWeight="bold" mb={1}>Language</Typography>
                                        <Box sx={{ p: 0, border: '1px solid #ccc', borderRadius: 2, bgcolor: 'white' }}>
                                            <Typography variant="body2" color="text.secondary">Native Ukranian.</Typography>
                                            <Typography variant="body2" color="text.secondary">English: Intermediate to Upper Intermediate (B1-B2)</Typography>
                                        </Box>
                                    </Box>
                                        <Grid item xs={12} sm={6} md={4}>
                                            <Typography variant="h6" fontWeight="bold" mb={1}>HOBBIES</Typography>
                                            <Box sx={{ p: 0, border: '1px solid #ccc', borderRadius: 2, bgcolor: 'white' }}>
                                                <Typography variant="body1" color="text.secondary">
                                                    Gym workouts to stay active and focused. <br/>
                                                    Exploring new technologies and programming stacks.<br/>
                                                    Reading books on programming and self-improvement.
                                                </Typography>
                                            </Box>
                                        </Grid>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Grid>
                </Box>

            </Box>
        </Container>
    );
}

export default Cv;
