import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    // change the colors here using material UI color scale
    // use in component with `colorScheme="brand"`

    // brand: {
    teal: "#2ad5d0",
    darkGreen: "#324b4a",
    lightGreen: "#95b1af",
    lightBlue: "#a2beff",
    darkBlue: "#6a89d3",
    // },
  },
});

export default customTheme;
