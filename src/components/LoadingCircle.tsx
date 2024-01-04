import { Box, CircularProgress } from "@mui/material";

interface Props {
  size?: number | string;
}

export default ({ size }: Props) => {
  return <CircularProgress size={size} />;
};
