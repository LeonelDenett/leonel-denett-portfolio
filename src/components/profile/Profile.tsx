// Next
import Image from "next/image";
// Styles
import styles from "./Profile.module.css"
// Mui Components
import Box from '@mui/material/Box';
// Image
import profile from "../../images/profile.png"

export default function Profile() {
    
    return (
        <Box className={styles.container}>
            <Box className={styles.profileContainer}>
                <Image
                    src={profile}
                    alt="Profile picture"
                    className={styles.photo}
                />
            </Box>
        </Box>
    )
}
