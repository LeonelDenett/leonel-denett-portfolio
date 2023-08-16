// Next
import { useRef, useEffect } from "react"
// Styles
import styles from "./Modal.module.css";
// Mui Components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography"
// Framer Motion
import { motion, usePresence } from "framer-motion";
import { gsap } from "gsap";
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Data
import { Project } from "@/utils/data/cards";

// Props
interface ModalProps {
    isOpen: boolean;
    project: Project;
    closeModal: () => void;
}

function ModalProjects({ project, closeModal, isOpen }: ModalProps) {
    const modalVariants = {
        initial: {opacity: 0,},
        animate: { opacity: 1,},
        exit: { opacity: 0},
    };

    const ref = useRef(null);
    const [isPresent, safeToRemove] = usePresence();

    useEffect(() => {
      if (!isPresent) {
        gsap.to(ref.current, {
          onComplete: () => safeToRemove?.()
        });
      }
    }, [isPresent, safeToRemove]);

    return (
        <Modal
            open={isOpen}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={styles.modalContainer}
            component={motion.div}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={modalVariants}
            ref={ref}
            sx={{marginLeft: {xs:"1rem", sm:"2rem",md:"3rem", lg:"20.75rem"}, marginRight: {xs:"1rem", sm:"2rem",md:"3rem", lg:"24.5rem"}, margin: {xs:"1rem", sm:"2rem",md:"3rem"}}}
        >
            <Box className={styles.swiperContainer} component={motion.div} initial={{x:200}} animate={{x:0}} exit={{x:-200}}>
                <Box className={styles.title}>
                    <Typography variant="h3" color="primary">{project.title}</Typography>
                </Box>
                <Swiper
                    className={styles.swiper}
                    modules={[Autoplay, Pagination,EffectFade]}
                    pagination={{clickable: true}}
                    slidesPerView={1}
                >
                    {/* Description Funtionalties ands Tools */}
                    <SwiperSlide>
                        <Box className={styles.center}>
                            <Box className={styles.content} sx={{padding: {lg:"7rem"}}}>
                                <Box className={styles.description}>
                                    <Box>
                                        <Typography>Description:</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2">{project.description}</Typography>
                                    </Box>
                                </Box>
                                <Box className={styles.functionalities}>
                                    <Box>
                                        <Typography>Functionalities:</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2">{project.functionalities}</Typography>
                                    </Box>
                                </Box>
                                <Box className={styles.tools}>
                                    <Box>
                                        <Typography>Tools:</Typography>
                                        </Box>
                                        <Box>
                                        <Typography variant="body2">{project.tools}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </SwiperSlide>
                </Swiper>
                <Paper className={styles.buttonOutContainer} elevation={20}>
                    <Button onClick={closeModal} variant="contained" className={styles.buttonOut}>Exit</Button>
                </Paper>
            </Box>
        </Modal>
    );
}

export default ModalProjects;