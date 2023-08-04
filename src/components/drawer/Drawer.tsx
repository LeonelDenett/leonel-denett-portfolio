import { useState, Fragment } from "react";
// Styles
import styles from "./Drawer.module.css";
// Mui Components
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// Mui Icons
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// Framer Motion
import { motion } from 'framer-motion';
// Data
import { MenuData } from "@/utils/data/navbar";

interface MyMeasuresProps {
    height: number,
    width: number
}

function DrawerMenu(props: MyMeasuresProps) {
    // Modal
    const { height, width } = props;
    const [state, setState] = useState({top: false});
    type Anchor = 'top';
    const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
        setState({ ...state, [anchor]: open });
    };
    // Smooth Scroll
    function smoothScroll(target: string) {
        const targetElement = document.querySelector(`#${target}`);
        if(targetElement) {
            targetElement.scrollIntoView();
            console.log("Scrolling to:", targetElement.id)
        }
    }

    return (
        <Box component={motion.div} whileTap={{scale:0.8}}>
            {/* Drawer */}
            {(['top'] as const).map((anchor) => (
                <Fragment key={anchor}>
                <IconButton className={styles.menu} onClick={toggleDrawer(anchor, true)}>
                    <MenuRoundedIcon color="primary" />
                </IconButton>
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    <Box
                        className={styles.drawer}
                        role="presentation"
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}
                    >
                        {MenuData.map((item) => (
                            <Box className={styles.items} key={item.id}>
                                <Button component={motion.button} whileTap={{scale:0.8}} variant="contained" color="secondary" onClick={() => setTimeout(() => smoothScroll(item.title), 0)}>{item.title}</Button>
                            </Box>
                        ))}
                    </Box>
                </Drawer>
                </Fragment>
            ))}
        </Box>
    );
}

export default DrawerMenu;