import { CircularProgress } from "@mui/material";

interface Props {
  size?: number | string;
}

const LoadingCircle = ({ size }: Props) => {
  return <CircularProgress size={size} style={{ margin: "0 auto" }} />;
};

export default LoadingCircle;
