import { Button } from "@mui/material";
import LoadingCircle from "./LoadingCircle";

interface Props {
  isLoading: boolean;
  fetchData: () => Promise<void>;
}

const GenerateUserButton: React.FC<Props> = ({ isLoading, fetchData }) => {
  return (
    <Button
      color="primary"
      variant="contained"
      disabled={isLoading}
      onClick={fetchData}
    >
      {isLoading && (
        <span className="generating-text">
          Generating... <LoadingCircle size={"12px"} />
        </span>
      )}
      {!isLoading && <span>Generate</span>}
    </Button>
  );
};

export default GenerateUserButton;
