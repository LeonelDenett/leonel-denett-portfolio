// Next
import Image from 'next/image';
import { useState } from 'react';
// Style
import styles from "./Logo.module.css"
// Mui Components
import Box from '@mui/material/Box';
// Logo
import logoPic from '../../../public/logo.png';


export default function Logo() {
    
    return (
        <Box>
            <Image
                src={logoPic}
                alt="Picture of the logo"
                height={80}
                width={80}
            />
        </Box>
    )
}