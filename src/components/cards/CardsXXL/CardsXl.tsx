// Next
import Image from 'next/image';
import Link from 'next/link';
// Styles
import styles from './CardsXl.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
// Framer Motion
import { motion } from "framer-motion"
// Data
import { Project } from '@/utils/data/cards';
import CardsButton from '../CardsButton/CardsButton';

// Props
interface CardProps {
    project: Project;
    openModal: (project: Project) => void;
}

function CardsXl({project, openModal}: CardProps) {
    return (
        <Box>
            <Paper elevation={4} sx={{borderRadius:"1rem"}} className={styles.cardContainer}>
                <Box className={styles.infoContainer}>
                    <Box className={styles.imageContainer}>
                        <Image src={project.imgCard} alt={project.altCard} className={styles.photo} />
                    </Box>
                    <Box className={styles.cardContent}>
                        <Paper elevation={5} sx={{borderRadius:"1rem", transition: "all .3s"}} className={styles.title} onClick={() => openModal(project)}>
                            <Typography>{project.title}</Typography>
                        </Paper>
                    </Box>
                </Box>
                {/* Buttons */}
                <CardsButton project={project} />
            </Paper>
        </Box>
    );
}

export default CardsXl;