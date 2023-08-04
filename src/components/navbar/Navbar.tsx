// Next
import Link from "next/link";
// Styles
import styles from './Navbar.module.css';
// Mui Components
import Box from '@mui/material/Box';
import { AppBar } from "@mui/material";
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";
// Components
import DrawerMenu from "@/components/drawer/Drawer";
import Menu from '@/components/menu/Menu';

function Navbar() {
    // Querys
    const theme = useTheme();
    const isPhone = useMediaQuery(theme.breakpoints.between('xs', 'md'));

    return (
        <Box className={styles.header}>
            <Link href={"/"} style={{textDecoration:"none", color:"inherit"}}>
                <Typography variant="caption" fontSize={"1.5rem"} color={"primary"}>Leonel Denett</Typography>
            </Link>
            {
                isPhone?
                <DrawerMenu height={22} width={37} />
                :
                <Menu/>
            }
        </Box>
    );
}

export default Navbar;