// NextJs
import Link from "next/link";
import { useState } from "react";
// Styles
import styles from "../styles/About.module.css";
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Subtitle from "@/components/subtitlesPages/Subtitles";
// Swiper
import SwiperCarousel from "@/components/swiper/Swiper";
// Framer Motion
import { motion } from 'framer-motion';
// Mailer
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormData {
    name: string;
    email: string;
    message: string;
    _subject: string;
}

const initialValues: FormData = {
    name: '',
    email: '',
    message: '',
    _subject: 'New portfolio contact',
};

function About() {
    const theme = useTheme();
    const isPhone = useMediaQuery(theme.breakpoints.between('xs', 'lg'));
  
    const [emailSent, setEmailSent] = useState<boolean>(false);
    const formSpreeURL = 'https://formspree.io/f/xwkdvwgz';
    const [isFormValidating, setIsFormValidating] = useState(false);

    const handleFormSubmit = async (values: FormData, actions: any) => {
        // Set the subject for the email
        values._subject = "New portfolio contact";
        setIsFormValidating(true);
        try {
            const response = await fetch(formSpreeURL, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                actions.resetForm();
                setEmailSent(true);
                console.log("email sended")
            } else {
                console.error('Error sending email:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending email:', error);
        } finally {
            setIsFormValidating(false);
            actions.setSubmitting(false);
        }
    };

    
    const cvUrl = '/utils/cv/CV-Leonel-Denett.pdf'; // Ajusta la ruta a tu archivo CV

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'CV-Leonel-Denett.pdf'; // Nombre del archivo para la descarga
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <Box className={styles.aboutPage}>
            {/* Subtitle */}
            <Subtitle subtitle={"About Me"} id={"Contact"} />
            <Grid container className={styles.container} columnGap={5}>
                {/* Presentation */}
                <Grid item lg={isPhone? 12 : 6}>
                    <Box className={styles.presentationContainer}>
                        <Paper className={styles.presentation} sx={{borderRadius:"1rem", backgroundColor:"#0b1c27"}} elevation={5}>
                            <Typography className={styles.presentationText} color="primary">
                                My name is <Typography variant="caption" className={styles.name}>Leonel Denett.</Typography><br/>
                                I&apos;m a full stack developer from Argentine based in France.<br/><br/>
                                I usually work with React, NextJs and Firebase.
                            </Typography>
                        </Paper>
                        {/* Resume CV */}
                        <Box className={styles.resumeContainer}>
                            <a href="/CV-Leonel-Denett.pdf" download="CV-Leonel-Denett.pdf">
                            <Paper sx={{borderRadius:"1rem"}} elevation={5} className={styles.resumeButtonContainer}>
                                <Button component={motion.button} whileHover={{scale: 1.05}} className={styles.resume}>R<br/>e<br/>s<br/>u<br/>m<br/>e</Button>
                            </Paper>
                            </a>
                        </Box>
                    </Box>
                    {/* More info about me */}
                    {isPhone&&
                        <Grid item lg={5} mt={4}>
                            <Paper elevation={5} sx={{borderRadius:"1rem", maxWidth:"30rem"}}>
                                <SwiperCarousel/>
                            </Paper>
                        </Grid>
                    }
                    {/* Contact */}
                    <Box className={styles.contact}>
                        <Box className={styles.contactContainer}>
                            {/* Title */}
                            <Typography variant="subtitle1" className={styles.contactTitle} color="primary" fontWeight={"bolder"}>CONTACT</Typography>
                            {/* Form */}
                            <Formik
                                initialValues={initialValues}
                                validationSchema={Yup.object({
                                    name: Yup.string().required('Required'),
                                    email: Yup.string().email('Invalid email').required('Required'),
                                    message: Yup.string().required('Required'),
                                })}
                                onSubmit={handleFormSubmit}>
                                <Form>
                                    <Paper sx={{borderRadius:"1rem", backgroundColor:"#0b1c27"}} elevation={5}>
                                        <Box className={styles.form}>
                                                <Field
                                                    name="_subject"
                                                    type="hidden"
                                                    value="New portfolio contact"
                                                />
                                                <Field
                                                    name="name"
                                                    type="text"
                                                    as={TextField} // Render the TextField component
                                                    label="Name"
                                                    fullWidth
                                                    size="small"
                                                    variant="filled"
                                                    color="secondary"
                                                    sx={{ backgroundColor: "#eeeeee", borderRadius: "0.625rem" }}
                                                    InputProps={{
                                                        disableUnderline: true,
                                                    }}
                                                    InputLabelProps={{ style: { color: "#0b1c27", borderRadius: "0.625rem" } }}
                                                />
                                                <ErrorMessage className={styles.error} name="name" component="div" />

                                                <Field
                                                    name="email"
                                                    type="email"
                                                    as={TextField} // Render the TextField component
                                                    label="Email"
                                                    noValidate
                                                    fullWidth
                                                    size="small"
                                                    variant="filled"
                                                    color="secondary"
                                                    sx={{ backgroundColor: "#eeeeee", borderRadius: "0.625rem" }}
                                                    InputProps={{
                                                        disableUnderline: true,
                                                    }}
                                                    inputProps={{ autoComplete: 'new-password' }}
                                                    InputLabelProps={{ style: { color: "#0b1c27" } }}
                                                />
                                                <ErrorMessage className={styles.error} name="email" component="div" />

                                                <Field
                                                    name="message"
                                                    as={TextField}
                                                    label="Message"
                                                    fullWidth
                                                    multiline
                                                    rows={4}
                                                    variant="filled"
                                                    color="secondary"
                                                    sx={{
                                                        backgroundColor: "#eeeeee",
                                                        borderRadius: "0.625rem",
                                                        '&::selection': {
                                                            color: 'red',
                                                            backgroundColor: "red",
                                                        }
                                                    }}
                                                    InputProps={{
                                                        disableUnderline: true,
                                                    }}
                                                    InputLabelProps={{ style: { color: "#0b1c27" } }}
                                                />
                                                <ErrorMessage className={styles.error} name="message" component="div" />
                                            
                                        </Box>
                                    </Paper>
                                    {/* Submit Button */}
                                    <Box className={styles.sendResumeButton} component={motion.div} whileHover={{scale: 1.05}}>
                                        <Paper sx={{borderRadius:".5rem", border:"solid 2px #eeeeee"}} elevation={5}>
                                            <Button
                                                type="submit"
                                                className={` ${styles.send} ${isFormValidating ? styles.invalid : '' }`}
                                                disabled={isFormValidating}
                                            >
                                                Send
                                            </Button>
                                        </Paper>
                                    </Box>
                                </Form>
                            </Formik>
                        </Box>
                    </Box>
                </Grid>
                {!isPhone&&
                    <Grid item lg={5}>
                        <Paper elevation={5} sx={{borderRadius:"1rem", maxWidth:"30rem"}}>
                            <SwiperCarousel/>
                        </Paper>
                    </Grid>
                }
            </Grid>
        </Box>
    );
}

export default About;