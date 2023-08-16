// Next
import { useState } from 'react';
// Styles
import styles from './Swiper.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function SwiperCarousel() {
    return (
        <Box className={styles.container}>
            <Box className={styles.swiperContainer}>
                <Box sx={{textAlign:"center", height:"100%", padding:"1rem", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Typography color={"#eeeeee"} variant="body1" fontSize={"1.03rem"}>
                        I am a 2022 graduate from Studi, specializing in <span style={{color:"#F66B0E"}}>full-stack web and mobile development</span>.<br/>
                        My expertise includes frontend technologies like <span style={{color:"#F66B0E"}}>React</span>, <span style={{color:"#F66B0E"}}>NextJs</span>, and <span style={{color:"#F66B0E"}}>React Native</span>.<br/>
                        For backend, I possess knowledge of <span style={{color:"#F66B0E"}}>MySQL</span>,<span style={{color:"#F66B0E"}}>MongoDB</span>, although my favorite is <span style={{color:"#F66B0E"}}>Firebase</span>.<br/>
                        For the sketches of my projects I use <span style={{color:"#F66B0E"}}>Figma</span>, then if I need some kind of
                        animation I use <span style={{color:"#F66B0E"}}>Framer-Motion</span>, and my favorite component library is <span style={{color:"#F66B0E"}}>MuiComponents</span><br/>
                        I continue to learn and study on my own.
                        With the focus on mobile apps using <span style={{color:"#F66B0E"}}>ReactNative,
                        Expo, Firebase</span>, and websites with <span style={{color:"#F66B0E"}}>Symphony and NextJs</span>.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default SwiperCarousel;