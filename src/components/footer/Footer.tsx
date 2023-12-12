// NextJs
import Link from "next/link"
// Mui Components
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

function Footer() {
    return (
        <Box p={3} sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"5rem",width:"100%", borderTop:"2px solid #eeeeee", backgroundColor:"#0b1c27"}}>
            <Link href={"https://d-studio.vercel.app/"} target="_blank" style={{textDecoration:"none", color:"#eeeeee"}}>
                <Typography variant="body2">Copyrights © D STUDIO | All rights Reserved</Typography>
            </Link>
        </Box>
    );
}

export default Footer;