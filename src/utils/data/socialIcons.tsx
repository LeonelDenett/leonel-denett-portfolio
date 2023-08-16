// Styles
import styles from '../../components/socialIcons/SocialIcons.module.css';
// Mui Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export const socialIcons = [
    {
        id: 1,
        icon: <LinkedInIcon className={styles.icon} sx={{width: {lg:"2rem", xl:"2.5rem"}, height: {lg:"2rem", xl:"2.5rem"}, color: "#eeeeee" }} />,
        link: 'https://www.linkedin.com/in/leonel-denett',
    },
    {
        id: 2,
        icon: <EmailIcon className={styles.icon} sx={{width: {lg:"2rem", xl:"2.5rem"}, height: {lg:"2rem", xl:"2.5rem"}, color: "#eeeeee" }} />,
        link: 'mailto: leoneldenett24@gmail.com',
    },
    {
        id: 3,
        icon: <GitHubIcon className={styles.icon} sx={{width: {lg:"2rem", xl:"2.5rem"}, height: {lg:"2rem", xl:"2.5rem"}, color: "#eeeeee" }} />,
        link: 'https://github.com/LeonelDenett?tab=repositories',
    },
];