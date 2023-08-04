// Styles
import styles from "./Subtitles.module.css";
// Mui Components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


interface MyMeasuresProps {
    subtitle: string,
    id: string
}

function Subtitle(props: MyMeasuresProps) {
    const { subtitle, id } = props;
    return (
        <Box className={styles.header} id={props.id}>
            <Box className={styles.titleContainer} component={Paper} elevation={5}>
                <Typography
                    component="h2"
                    variant="h4"
                    fontWeight={"bolder"}
                    className={styles.title}
                >
                    {props.subtitle}
                </Typography>
            </Box>
        </Box>
    );
}

export default Subtitle;
