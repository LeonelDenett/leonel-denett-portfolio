// Next
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'
// Styles
import styles from './CardsXl.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
// Images
import fire from '../../../images/bbq.jpg';
import andrea from '../../../images/andrea-ostheopahte.jpeg';
import counter from "../../../images/counter-kills.jpeg";
// Framer Motion
import { motion } from "framer-motion"
// Data
import { Project } from '@/utils/data/cards';

// Props
interface CardProps {
    project: Project;
    openModal: (project: Project) => void;
}

function CardsXl({project, openModal}: CardProps) {
    return (
        <Box>
            <Box component={Paper} elevation={4} sx={{borderRadius:"1rem"}} className={styles.cardContainer}>
                <Box className={styles.infoContainer}>
                    <Box className={styles.imageContainer}>
                        <Image src={project.imgCard} alt={project.altCard} className={styles.photo} />
                    </Box>
                    <Box className={styles.cardContent} onClick={() => openModal(project)}>
                        <Typography className={styles.title}>{project.title}</Typography>
                    </Box>
                </Box>
                {/* Buttons */}
                <Box className={styles.cardButtons}>
                    <Button className={styles.buttons} variant="contained">
                        <Link style={{textDecoration:"none", color:"#eeeeee"}} href={project.link}>Site</Link>
                    </Button>
                    <Button className={styles.buttons} variant="contained">
                        <Link style={{textDecoration:"none", color:"#eeeeee"}} href={project.github}>
                            <GitHubIcon/>
                        </Link>
                    </Button>
                </Box>
            </Box>
        </Box>
        
        // <Box className={styles.container}>
        //     <Grid container spacing={3}>
        //         <Grid item md={6} lg={4}>
        //             <Box component={Paper} elevation={4} className={styles.cardContainer}>
        //                 <Box className={styles.imageContainer}>
        //                     <Image src={counter} alt="Geek - Counter" className={styles.photo} />
        //                 </Box>
        //                 <Box className={styles.cardContent}>
        //                     <Typography className={styles.title}>Geek - Counter</Typography>
        //                 </Box>
        //             </Box>
        //         </Grid>
        //         <Grid item md={6} lg={8}>
        //             <Box component={Paper} elevation={4} className={styles.cardContainer}>
        //                 <Box className={styles.imageContainer}>
        //                     <Image src={andrea} alt="Andrea - Ostheopathe" className={styles.photo} />
        //                 </Box>
        //                 <Box className={styles.cardContent}>
        //                     <Typography className={styles.title}>Andrea - Ostheopathe</Typography>
        //                 </Box>
        //             </Box>
        //         </Grid>
        //         <Grid item md={6} lg={8}>
        //             <Box component={Paper} elevation={4} className={styles.cardContainer}>
        //                 <Box className={styles.imageContainer}>
        //                     <Image src={fire} alt="BBQ - Recipes" className={styles.photo} />
        //                 </Box>
        //                 <Box className={styles.cardContent}>
        //                     <Typography className={styles.title}>BBQ - Recipes</Typography>
        //                 </Box>
        //             </Box>
        //         </Grid>
        //         <Grid item md={6} lg={4}>
        //             <Box component={Paper} elevation={4} className={styles.cardContainer}>
        //                 <Box className={styles.imageContainer}>
        //                     <Image src={counter} alt="Andrea - Ostheopathe" className={styles.photo} />
        //                 </Box>
        //                 <Box className={styles.cardContent}>
        //                     <Typography className={styles.title}>Andrea - Ostheopathe</Typography>
        //                 </Box>
        //             </Box>
        //         </Grid>
        //     </Grid>
        // </Box>
        // <Box className={styles.container}>
        //     <Grid container spacing={3}>
        //         <Grid xs={12} item>
        //             <Box component={Paper} elevation={4} className={styles.cardContainer}>
        //                 <Box className={styles.imageContainer}>
        //                 {/* <Image src={project.imgCard} alt="Geek - Counter" className={styles.photo} /> */}
        //             </Box>
        //                 <Box className={styles.cardContent} onClick={() => openModal(project)}>
        //                     <Typography className={styles.title}>Geek - Counter</Typography>
        //                 </Box>
        //             </Box>
        //         </Grid>
        //     </Grid>
        // </Box>
        //                 <Box className={styles.containerLg}>

        //                 <Grid container>
        //                     <Grid md={6} lg={4} item>
        //                         <Box component={Paper} elevation={4} className={styles.cardContainerLg}>
        //                             <Box className={styles.imageContainerLg}>
        //                             <Image src={photographer} alt="hola" className={styles.photoLg} />
        //                         </Box>
        //                             <Box className={styles.cardContentLg} onClick={() => openModal(project)}>
        //                                 <Typography className={styles.titleLg}>{project.title}</Typography>
        //                             </Box>
        //                         </Box>
        //                     </Grid>
        //                     <Grid md={6} lg={8} item>
        //                         <Box component={Paper} elevation={4} className={styles.cardContainerLg}>
        //                             <Box className={styles.imageContainerLg}>
        //                             <Image src={osteopathe} alt={project.altCard} className={styles.photoLg} />
        //                         </Box>
        //                             <Box className={styles.cardContentLg} onClick={() => openModal(project)}>
        //                                 <Typography className={styles.titleLg}>{project.title}</Typography>
        //                             </Box>
        //                         </Box>
        //                     </Grid>
        //                     <Grid md={6} lg={8} item>
        //                         <Box component={Paper} elevation={4} className={styles.cardContainerLg}>
        //                             <Box className={styles.imageContainerLg}>
        //                             <Image src={fire} alt={project.altCard} className={styles.photoLg} />
        //                         </Box>
        //                             <Box className={styles.cardContentLg} onClick={() => openModal(project)}>
        //                                 <Typography className={styles.titleLg}>{project.title}</Typography>
        //                             </Box>
        //                         </Box>
        //                     </Grid>
        //                     <Grid md={6} lg={4} item>
        //                         <Box component={Paper} elevation={4} className={styles.cardContainerLg}>
        //                             <Box className={styles.imageContainerLg}>
        //                             <Image src={geek} alt={project.altCard} className={styles.photoLg} />
        //                         </Box>
        //                             <Box className={styles.cardContentLg} onClick={() => openModal(project)}>
        //                                 <Typography className={styles.titleLg}>{project.title}</Typography>
        //                             </Box>
        //                         </Box>
        //                     </Grid>
        //                 </Grid>
        //                 {/* <Grid container>
        //                     {projectData.map((project) => (
        //                         <Grid item md={project.md} lg={project.lg} >
        //                             <Box>{project.title}</Box>
        //                         </Grid>
        //                     ))}
        //                 </Grid> */}
        //             </Box>
    );
}

export default CardsXl;