import { Button, Grid } from "@mui/material";
import LoadingCircle from "./LoadingCircle";

interface Props {
  isLoading: boolean;
  fetchData: () => Promise<void>;
  isStateInvalid: boolean;
}

const GenerateUserButton: React.FC<Props> = ({
  isLoading,
  fetchData,
  isStateInvalid,
}) => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Button
          color="primary"
          variant="contained"
          disabled={isLoading || isStateInvalid}
          onClick={fetchData}
          className="generate-button"
        >
          {isLoading && (
            <span className="generating-text">
              Generating... <LoadingCircle size={"12px"} />
            </span>
          )}
          {!isLoading && <span>Generate</span>}
        </Button>
      </Grid>
    </Grid>
  );
};

export default GenerateUserButton;
