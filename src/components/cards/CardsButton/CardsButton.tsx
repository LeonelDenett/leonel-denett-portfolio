// NextJs
import Link from "next/link";
// Styles
import styles from "./CardsButton.module.css";
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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

// Props
interface CardsButtonProps {
    project: Project;
}

function CardsButton({project} : CardsButtonProps) {
    // Querys
    const theme = useTheme();
    const isPhone = useMediaQuery(theme.breakpoints.between('xs', 'md'));
    return (
        <Box className={isPhone? styles.cardButtons : styles.cardButtonsXl}>
            {
                project.id !== 3 ?
                <>
                <Button component={motion.button} whileHover={{scale:1.05, background: "linear-gradient(to bottom, #F66B0E,#FB8B35)"}} className={isPhone? styles.buttons : styles.buttonsXl} sx={{borderRadius:".5rem", border:"solid 2px #eeeeee"}} variant="contained">
                    <Link style={{textDecoration:"none", color:"#eeeeee"}} href={project.link}>Site</Link>
                </Button>
                <Button component={motion.button} whileHover={{scale:1.05, background: "linear-gradient(to bottom, #F66B0E,#FB8B35)"}} className={isPhone? styles.buttons : styles.buttonsXl} sx={{borderRadius:".5rem", border:"solid 2px #eeeeee"}} variant="contained">
                    <Link style={{textDecoration:"none", color:"#eeeeee", display:"flex", alignItems:"center"}} href={project.github}>
                        <GitHubIcon/>
                    </Link>
                </Button>
                </>
                :
                <Box className={styles.disabled}>
                    <Typography>Maintenance</Typography>
                    <SettingsIcon component={motion.svg} animate={{rotate:360,transition:{duration:2, repeat:Infinity, ease:'linear'}}} fontSize="large" className={styles.icon}/>
                </Box>
            }
        </Box>
    );
}

export default CardsButton;