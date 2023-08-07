import styles from "./Menu.module.css";
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
        <Box>
            <Paper className={styles.menu} sx={{borderRadius:"1rem", backgroundColor: "#0b1c27"}} elevation={5}>
                {MenuData.map((item) => (
                    <Box key={item.id} className={styles.menuContainer} onClick={() => smoothScroll(item.title)}>
                        <Typography variant="body2" className={styles.menuItem}>{item.title}</Typography>
                        <Divider color="primary" className={styles.divider} />
                    </Box>
                ))}
            </Paper>
        </Box>
    );
}

export default Menu;