import { Button, Grid } from "@mui/material";
import GenderSelect from "./GenderSelect";
import NationalitySelector from "./NationalitySelector";
import GenerateUserButton from "./GenerateUserButton";

interface Props {
  isLoading: boolean;
  fetchData: () => Promise<void>;
}

const GeneratorOptions: React.FC<Props> = (props) => {
  return (
    <>
      <Grid item xs={12}>
        <GenderSelect />
      </Grid>
      <Grid item xs={12}>
        <NationalitySelector />
      </Grid>
      <Grid item xs={12}>
        <GenerateUserButton {...props} />
      </Grid>
    </>
  );
};

export default GeneratorOptions;
