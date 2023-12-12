// Next
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
// Profile Image
import profilePhoto from "../images/profile.jpeg";
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
// Components
import SocialIcons from '@/components/socialIcons/SocialIcons';
import { MetaData } from '@/components/head/Head';
// Framer Motion
import { motion } from "framer-motion";
// Components
import Projects from './projects';
import About from './about';


export default function Home() {
    // Smooth Scroll
    function smoothScroll(target: string) {
        const targetElement = document.querySelector(`#${target}`);
        if(targetElement) {
            targetElement.scrollIntoView();
        }
    }
    return (
        <Box component={motion.div} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
            {/* Metadata */}
            <MetaData/>
            {/* HomePage */}
            <Box className={styles.container} id="Home" sx={{paddingInline: {xs:"1.25rem", sm:"1.5rem"}, boxShadow: {lg:"inset 0 0 1rem black"}}}>
                {/* Presentation */}
                <Box className={styles.presentation}>
                    <Typography color="primary" className={styles.presentationText}>Welcome, I&apos;m</Typography>
                    <Typography component="h1" variant="h1" className={styles.name}>Leonel Denett</Typography>
                    <Typography component="h2" color="primary" className={styles.presentationText}>Full stack Developer</Typography>
                </Box>
                {/* Photo */}
                <Box className={styles.photoContainer}>
                    <Paper className={styles.photo} elevation={5} sx={{borderRadius:"2rem"}}>
                        <Image alt={"profile photo"} className={styles.profilePhoto} priority fill src={profilePhoto} />
                    </Paper>
                    <SocialIcons />
                </Box>
                {/* Description */}
                <Box className={styles.description}>
                <Paper sx={{borderRadius:"1rem"}} elevation={5}>
                    <Box className={styles.descriptionContainer} sx={{borderRadius: "1rem"}} >
                        <Typography color="primary" className={styles.descriptionText}>
                        Fusing full-stack development with UI/UX design, I create responsive apps with intuitive interfaces and captivating experiences.
                        {/* I'm a full-stack developer specialized in Next.js and Firebase, also skilled in crafting my own UX/UI designs.I create responsive apps with intuitive interfaces and captivating experiences. */}
                        </Typography>
                        <Box className={styles.descriptionButtonContainer} component={motion.div} whileHover={{scale: 1.05}} onClick={() => smoothScroll("Contact")}>
                            <Paper elevation={5} sx={{borderRadius: "1rem", color:"#eeeeee"}}>
                                <Button sx={{borderRadius: "1rem", color:"#eeeeee", border:"solid 2px #eeeeee"}} variant="contained" className={styles.descriptionButton}>Contact me</Button>
                            </Paper>
                        </Box>
                    </Box>
                </Paper>
                </Box>
            </Box>
            <Projects/>
            <About/>
        </Box>
    )
}
