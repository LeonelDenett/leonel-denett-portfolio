// Mui Components
import Box from '@mui/material/Box';
// Styles
import styles from "./Header.module.css";
// Components
import Logo from '../logo/Logo';
import DrawerMenu from '../drawer/Drawer';

function Header() {
    return (
        <Box className={styles.container}>
            <Logo/>
            <DrawerMenu/>
        </Box>
    );
}

export default Header;