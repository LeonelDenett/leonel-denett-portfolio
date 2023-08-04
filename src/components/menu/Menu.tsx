import styles from "./Menu.module.css";
// Mui Components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
// Data
import { MenuData } from "@/utils/data/navbar";

function Menu() {
    function smoothScroll(target: string) {
        const targetElement = document.querySelector(`#${target}`);
        if(targetElement) {
            targetElement.scrollIntoView();
            console.log("Scrolling to:", targetElement.id)
        }
    }

    return (
        <Box className={styles.menu} component={Paper} elevation={5}>
            {MenuData.map((item) => (
                <Box key={item.id} className={styles.menuContainer} onClick={() => smoothScroll(item.title)}>
                    <Chip label={item.title} className={styles.menuItem} />
                    <Divider color="primary" className={styles.divider} />
                </Box>
            ))}
        </Box>
    );
}

export default Menu;