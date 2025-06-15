import { createTheme, MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = createTheme({
  colors: {
    primary: [
      "#edf8ed",
      "#dbf1dc",
      "#caeaca",
      "#b7e3b8",
      "#a5dba7",
      "#92d495",
      "#7fcc83",
      "#6bc571",
      "#6bc571",
      "#39b54a",
      "#309d3f",
      "#288635",
      "#1f6f2a",
      "#175920",
      "#175920",
      "#104417",
      "#09300e",
      "#041d06",
      "#010c02",
      "#000200",
    ],
  },
  primaryColor: "primary",
  primaryShade: 9,
  defaultRadius: "lg",

});

export default theme;