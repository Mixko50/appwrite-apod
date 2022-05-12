import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
});

const theme = extendTheme({
    fonts: {
        heading: "Roboto",
        body: "Roboto",
    },
    breakpoints,
});

export default theme;
