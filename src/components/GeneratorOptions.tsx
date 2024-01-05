import { Button, Grid, Paper } from "@mui/material";
import GenderSelect from "./GenderSelect";
import NationalitySelector from "./NationalitySelector";
import GenerateUserButton from "./GenerateUserButton";
import { GenderSelection, Nationality } from "@/helpers/types";
import { RandomUserGeneratorState } from "./RandomUserGenerator";

interface Props {
  state: RandomUserGeneratorState;
  setState: (newState: RandomUserGeneratorState) => void;
  isLoading: boolean;
  fetchData: () => Promise<void>;
}

const GeneratorOptions: React.FC<Props> = (props) => {
  const { state, setState, isLoading, fetchData } = props;

  const setGenderSelection = (newGenderSelection: GenderSelection) =>
    setState({ ...state, genderSelected: newGenderSelection });
  const setNationalitiesSelection = (newNationalitiesSelected: Nationality[]) =>
    setState({ ...state, nationalitiesSelected: newNationalitiesSelected });

  return (
    <Paper className="generator-options">
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <GenderSelect
            value={state.genderSelected}
            onChange={setGenderSelection}
          />
        </Grid>
        <Grid item xs={12}>
          <NationalitySelector
            value={state.nationalitiesSelected}
            onChange={setNationalitiesSelection}
          />
        </Grid>
        <Grid item xs={12}>
          <GenerateUserButton
            isLoading={isLoading}
            fetchData={fetchData}
            isStateInvalid={state.nationalitiesSelected.length === 0}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GeneratorOptions;
