import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import React from "react";
import { Link } from "react-router-dom";

const TotalItems = () => {

    return (
        < Box sx={{ mt: '100px', mx: '110px' }}
            style={{ textAlign: 'left' }}>
            <Grid container spacing={30}>
                <Grid item xs={3}>
                    <Link to={`/men-clothing`} style={{ textDecoration: 'none' }}>
                        <Card sx={{
                            width: '260px', height: '200px',
                            bgcolor: '#ffffff',
                            '&:hover': {
                                background: "#f3f4f7",
                            },
                        }} >
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Men's clothing
                                    </Typography>
                                    <InfoOutlinedIcon sx={{ fontSize: 14 }} />
                                </Box>
                                <Typography variant="h5" component="div">
                                    No.of items - 4
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Click me
                                </Typography>
                                <Typography variant="body2">
                                    This category is for the clothing of men and boys.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to={`/women-clothing`} style={{ textDecoration: 'none' }}>
                        <Card sx={{
                            width: '260px', height: '200px',
                            bgcolor: '#ffffff',
                            '&:hover': {
                                background: "#f3f4f7",
                            },
                        }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Women's clothing
                                    </Typography>
                                    <InfoOutlinedIcon sx={{ fontSize: 14 }} />
                                </Box>
                                <Typography variant="h5" component="div">
                                    No.of items - 6
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Click me
                                </Typography>
                                <Typography variant="body2">
                                    This category is for the clothing of women and girls.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to={`/electronics`} style={{ textDecoration: 'none' }}>
                        <Card sx={{
                            width: '260px', height: '200px',
                            bgcolor: '#ffffff',
                            '&:hover': {
                                background: "#f3f4f7",
                            },
                        }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Electronics
                                    </Typography>
                                    <InfoOutlinedIcon sx={{ fontSize: 14 }} />
                                </Box>
                                <Typography variant="h5" component="div">
                                    No.of items - 6
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Click me
                                </Typography>
                                <Typography variant="body2">
                                    This category is for electronic items.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to={`/jewelery`} style={{ textDecoration: 'none' }}>
                        <Card sx={{
                            width: '260px', height: '200px',
                            bgcolor: '#ffffff',
                            '&:hover': {
                                background: "#f3f4f7",
                            },
                        }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Jewelery
                                    </Typography>
                                    <InfoOutlinedIcon sx={{ fontSize: 14 }} />
                                </Box>
                                <Typography variant="h5" component="div">
                                    No.of items - 4
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Click me
                                </Typography>
                                <Typography variant="body2">
                                    This category is for jewelery.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            </Grid>
        </Box >
    )
}

export default TotalItems;