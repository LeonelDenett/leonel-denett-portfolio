// Styles
import styles from './Button.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'

interface MyMeasuresProps {
    buttonFunction: () => void,
    text: string,
}

function MyButton(props: MyMeasuresProps) {
    const { buttonFunction, text } = props;
    return (
        <Button className={styles.button} onClick={props.buttonFunction}>
            {props.text}
        </Button>
    );
}

export default MyButton;