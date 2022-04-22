import React from 'react';
import { Box, Stack, Grid, Link, Typography, Divider } from '@mui/material';
import img1 from '../Images/rooms/room1.jpg';
import img2 from '../Images/rooms/rooms2.jpg';
import img3 from '../Images/rooms/rooms3.jpg';
const Home = () => {
    return (<>
        <Box className='section header-section'>
            <Box component='header' sx={{
                width: '90%',
                margin: 'auto !important',
                padding: '22px 0px'
            }}>
                <Stack direction='row'>
                    <Box component='div' sx={{ flexGrow: 1 }}>
                        <Link className='logo' color='text.primary' underline='none'
                            sx={{
                                letterSpacing: '1px',
                                fontSize: '22px',
                                fontWeight: 'bold'
                            }}>
                            YALETOWN
                        </Link>
                    </Box>
                    <Box component='div'>
                        <Grid container columnSpacing={6}>
                            <Grid item>
                                <Box className='menuItem'>Home</Box>
                            </Grid>
                            <Grid item>
                                <Box className='menuItem'>Rooms</Box>
                            </Grid>
                            <Grid item>
                                <Box className='menuItem'>Why Us</Box>
                            </Grid>
                            <Grid item>
                                <Box className='menuItem'>Packages</Box>
                            </Grid>
                            <Grid item>
                                <Box className='menuItem'>Features</Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Box>
        </Box>
        {/* Banner section */}
        <Box component='section' className='banner'>
            <Stack direction='row'>
                <iframe src='https://www.youtube.com/embed/jhmZbljuMHc?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fdemo.themovation.com&widgetid=1' title='Banner Video' />
            </Stack>
        </Box>
        {/* Guest House */}
        <Box component='section' className='guest-house' py={9}>
            <Stack direction='column'>
                <Typography variant='h4' align='center' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>OUR GUEST HOUSE</Typography>
                <Divider sx={{ width: '60px', margin: 'auto', borderBottomWidth: 'unset' }} color='error' />
                <Grid container spacing={3} justifyContent='center' mt={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography variant='body2' align='center'>
                            Etiam scelerisque nunc eu sagittis rhoncus. Mauris eget ullamcorper tortor.
                            Phasellus nisi enim, mattis eu felis sit amet, malesuada pharetra purus.
                            Integer congue dapibus felis, at vulputate quam lobortis ac.
                        </Typography>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
        <Box component='section' className='guest-house'>
            <Stack direction='column'>
                <Grid container spacing={1} justifyContent='center'>
                    <Grid item xs={12} sm={12} md={4}>
                        <Box component='img' src={img1} sx={{
                            width: '100%',
                            height: '300px'
                        }}></Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Box component='img' src={img2} sx={{
                            width: '100%',
                            height: '300px'
                        }}></Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Box component='img' src={img3} sx={{
                            width: '100%',
                            height: '300px'
                        }}></Box>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
        {/* Welcome */}
        <Box  sx={{backgroundColor:'#f7f5f5'}}>
        <Box component='section' className='guest-house' py={9} sx={{ width: '85%', margin: 'auto'}}>
            <Stack direction='column'>
                <Grid container spacing={4} alignItems='center'>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                            Welcome to the West Coast
                        </Typography>
                        <Typography variant='body2'>
                            Aenean hendrerit maximus aliquet. Pellentesque interdum odio dui, vitae eleifend nibh aliquet ac.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                            diam lorem, condimentum non justo quis, suscipit mattis felis.
                            Vivamus cursus tortor in maximus lacinia.
                            Etiam rhoncus finibus lorem sit amet ullamcorper.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box component='iframe'
                        src="https://youtu.be/K9GvoMsDDBU" height='350px'></Box>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
        </Box>
    </>)
}

export default Home;