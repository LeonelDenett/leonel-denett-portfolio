// Next
import Link from "next/link";
import { Fragment } from "react";
// Styles
import styles from "./SocialIcons.module.css";
// Mui Components
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'
import Paper from "@mui/material/Paper";
// Framer Motion
import { motion } from "framer-motion";
// Data
import { socialIcons } from "@/utils/data/socialIcons";

export default function SocialIcons() {
    return (
        <Box className={styles.container} component={Paper} elevation={3}>
            <Box className={styles.iconsContainer} component={Paper} elevation={3}>
                {socialIcons.map((icon) => (
                    <Link key={icon.id} href={icon.link} target="_blank">
                        <IconButton
                            component={motion.button}
                            whileHover={{scale:1.1}}
                            whileTap={{scale:.8}}
                        >
                            {icon.icon}
                        </IconButton>
                    </Link>
                ))}
            </Box>
        </Box>
    )
}
