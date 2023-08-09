// NextJs
import { useState } from 'react';
// Style
import styles from "../styles/Projects.module.css";
// Mui Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// Mui Styles
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// Components
import Cards from '@/components/cards/CardsXS/Cards';
import CardsXl from '@/components/cards/CardsXXL/CardsXl';
import Subtitle from '@/components/subtitlesPages/Subtitles';
import ModalProjects from "@/components/Modal/Modal";
// Data
import { Project, projectData } from '@/utils/data/cards';
// Framer Motion
import { AnimatePresence } from 'framer-motion';


function Projects() {
    // Querys
    const theme = useTheme();
    const isPhone = useMediaQuery(theme.breakpoints.between('xs', 'md'));
    // Modal
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsOpen(true);
        console.log("modal opened")
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedProject(null);
        console.log("modal closed")
    };

    return (
        <Box className={styles.projects}>
            {/* Subtitle */}
            <Subtitle subtitle={"Projects"} id={"Projects"} />
            {/* Content */}
            <Box className={styles.container}>
                {/* Cards */}
                {isPhone?
                <Box sx={{position:"relative", width:"100%"}}>
                    {projectData.map((project) => (
                        <Cards key={project.id} project={project} openModal={openModal} />
                    ))}
                    <AnimatePresence>
                        {isOpen && selectedProject && (
                            <ModalProjects isOpen={isOpen} project={selectedProject} closeModal={closeModal} />
                        )}
                    </AnimatePresence>
                </Box>
                :
                <Box sx={{position:"relative", width:"100%", marginLeft: {lg:"5rem", xl:"14.75rem"}, marginRight:{lg:"1.5rem", xl:"17.5rem"}, marginBottom:"1.5rem"}}>
                    <Grid container spacing={3}>
                        {projectData.map((project) => (
                            <Grid item md={project.md} lg={project.lg} key={project.id}>
                                <CardsXl project={project} openModal={openModal}/>
                            </Grid>
                        ))}
                    </Grid>
                    <AnimatePresence>
                        {isOpen && selectedProject && (
                            <ModalProjects isOpen={isOpen} project={selectedProject} closeModal={closeModal} />
                        )}
                    </AnimatePresence>
                </Box>
                }
            </Box>
        </Box>
    );
}

export default Projects;