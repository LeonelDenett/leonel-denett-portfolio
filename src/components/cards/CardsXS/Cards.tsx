// Next
import Image from 'next/image';
import Link from 'next/link';
// Styles
import styles from './Cards.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// Mui Icons
import SettingsIcon from '@mui/icons-material/Settings';
import GitHubIcon from '@mui/icons-material/GitHub';
// Mui Styles
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// Data
import { Project } from '@/utils/data/cards';
// Framer
import { motion } from 'framer-motion';
import CardsButton from '../CardsButton/CardsButton';


// Props
interface CardProps {
    project: Project;
    openModal: (project: Project) => void;
}

function Cards({project, openModal}: CardProps) {
    // Querys
    const theme = useTheme();
    const isPhone = useMediaQuery(theme.breakpoints.between('xs', 'md'));

    return (
        <Box key={project.id}>
            <Box className={styles.cardContainer}>
                <Card sx={{borderRadius:"1rem", backgroundColor: "#0b1c27", overflow:"visible"}} elevation={4} className={styles.card}>
                    <CardActionArea sx={{borderRadius:"1rem"}}>
                        <CardMedia className={styles.cardMedia}>
                            <Box className={styles.photoContainer}>
                                <Image src={project.imgCard} alt={project.altCard} className={styles.photo} />
                            </Box>
                        </CardMedia>
                        <CardContent>
                            <Box>
                                <Typography color="primary" variant="body1" fontSize={"2rem"}>{project.title}</Typography>
                                <Typography color="primary" variant='body1' sx={{marginTop:".5rem"}}>{project.description}</Typography>
                                <Button variant="contained" sx={{color: "#eeeeee", marginTop:"1rem", borderRadius:".5rem", border:"solid 2px #eeeeee"}} className={styles.buttons} onClick={() => openModal(project)}>
                                    See more
                                </Button>
                            </Box>
                            <CardsButton project={project}/>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Box>
    );
}

export default Cards;