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
            <Swiper
                className={styles.swiper}
                modules={[Pagination,EffectFade]}
                pagination={{clickable: true}}
                direction='vertical'
                slidesPerView={1}
            >
                <SwiperSlide className={styles.slides1}>
                    <Box sx={{textAlign:"center", height:"100%", padding:"1rem", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <Typography color={"#eeeeee"} variant="body2" fontSize={"1.03rem"}>
                            I am a 2022 graduate from Studi, specializing in full-stack web and mobile development.<br/>
                            My expertise includes frontend technologies like React, NextJs, and React Native.<br/>
                            For backend, I possess knowledge of MySQL, MongoDB, although my favorite is Firebase
                            due to its speed and ease of use.<br/> When developing my own applications,
                            I often sketch out the main ideas in my notebook. When working for clients
                            (I recently completed my first freelance project), I prepare comprehensive presentations using Figma.<br/>
                            I maintain a clean coding style and structure across projects,
                            utilizing the MuiComponents library for UI and Framer Motion for animations.<br/>
                            As a self-motivated learner, tools like ChatGPT  are invaluable, especially for
                            those of us without a mentor or senior developer,
                            helping us address coding challenges effectively.
                        </Typography>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={styles.slides2}>
                    <h1>Hola</h1>
                </SwiperSlide>
            </Swiper>
            </Box>
        </Box>
    );
}

export default SwiperCarousel;