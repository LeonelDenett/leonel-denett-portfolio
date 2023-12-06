// NextJs
import Link from "next/link"
// Mui Components
import Box from '@mui/material/Box';

function Footer() {
    return (
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"5rem", borderTop:"2px solid #eeeeee", backgroundColor:"#0b1c27"}}>
            <Link href={"https://d-studio.vercel.app/"} target="_blank" style={{textDecoration:"none", color:"#eeeeee"}}>
                Copyrights © D STUDIO | All rights Reserved
            </Link>
        </Box>
    );
}

export default Footer;