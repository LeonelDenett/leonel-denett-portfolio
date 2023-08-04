// Styles
import styles from '@/components/socialIcons/SocialIcons.module.css';
// Mui Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export const socialIcons = [
    {
        id: 1,
        icon: <LinkedInIcon className={styles.icon} />,
        link: 'https://www.linkedin.com/in/leonel-denett',
    },
    {
        id: 2,
        icon: <EmailIcon className={styles.icon} />,
        link: 'mailto: leonel.denett.dev@hotmail.com',
    },
    {
        id: 3,
        icon: <GitHubIcon className={styles.icon} />,
        link: 'https://github.com/LeonelDenett',
    },
];