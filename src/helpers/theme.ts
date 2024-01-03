import { createTheme } from "@mui/material/styles";

export default createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h1" },
          style: {
            fontSize: 24,
          },
        },
      ],
    },
  },
});
