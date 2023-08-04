// Styles
import styles from "../styles/Loading.module.css";
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Mui Icon
import SettingsIcon from '@mui/icons-material/Settings';
// Framer
import { motion } from 'framer-motion';

function Loading() {
    return (
        <Box key="modal" className={styles.main} component={motion.div} initial={{opacity:0}} animate={{opacity:1}}>
            <Box className={styles.main} component={motion.div} initial={{scale: .5}} animate={{scale: 1}}>
                <Typography variant="h1" color={"#eeeeee"}>Loading</Typography>
                <Box className={styles.iconContainer} component={motion.div} animate={{rotate:360,transition:{duration:2, repeat:Infinity, ease:'linear'}}}>
                    <SettingsIcon fontSize="large" className={styles.icon}/>
                </Box>
            </Box>
        </Box>
    );
}

export default Loading;
