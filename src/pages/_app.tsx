// NextJs
import { useState, useEffect } from "react";
import type { AppProps } from 'next/app';
// Styles
import '@/styles/globals.css';
// Mui Components
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
// Components
import Navbar from "@/components/navbar/Navbar";
// Colors
import { grey } from '@mui/material/colors';
// Fonts
import "@fontsource/space-mono";
// Loading Page
import Loading from "./loading";
import { Box } from "@mui/material";
import { AnimatePresence } from "framer-motion";
// React Toastify
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

// Mui Theme
let theme = createTheme({
    typography: {
        fontSize: 16,
        fontFamily: [
          '"Space Mono"'
        ].join(','),
        h1: {
          fontSize: "3.5rem"
        },
        h2: {
          fontSize: "4.5rem"
        },
        h6: {
          fontSize: "1.4rem"
        }
    },
    palette: {
        primary: {
            main: grey[200]
        },
        secondary: {
            main: "#112B3C"
        }
    },
});
theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }: AppProps) {
    // Loading Page
    const [loading, setLoading] = useState(true);

    const onPageLoaded = () => {
        console.log('La página se ha cargado completamente.');
    };

    useEffect(() => {
        let loadingTimeout: NodeJS.Timeout;
        if (typeof window !== 'undefined') {
            // Simula una carga asíncrona (por ejemplo, la carga de imágenes o datos)
            loadingTimeout = setTimeout(() => {
                setLoading(false);
            }, 3000); // 10 segundos (10000 milisegundos)

            // Verificación de carga completa
            if (document.readyState === 'complete') {
                // Si el estado del documento ya es 'complete', el evento load ya se ha disparado,
                // así que llamamos directamente a onPageLoaded
                onPageLoaded();
            } else {
                // Si el estado del documento no es 'complete', agregamos el listener al evento load
                console.log('Agregando evento load');
                window.addEventListener('load', onPageLoaded);
            }
        }
        return () => {
            // Limpia el listener cuando el componente se desmonta
            console.log('Eliminando evento load');
            window.removeEventListener('load', onPageLoaded);
            clearTimeout(loadingTimeout);
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <AnimatePresence>
            {
                loading ?
                    <Loading />
                :
                <Box>
                    <ToastContainer hideProgressBar={true} pauseOnHover autoClose={4000} />
                    <Navbar/>
                    <Component {...pageProps} />
                </Box>
            }
            </AnimatePresence>
        </ThemeProvider>
    )
}
