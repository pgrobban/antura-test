import { AllSelection, GenderSelection } from "@/helpers/types";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface Props {
  value: GenderSelection;
  onChange: (newValue: GenderSelection) => void;
}

const GenderSelect: React.FC<Props> = ({ value, onChange }) => {
  return (
    <FormControl className="gender-select">
      <FormLabel>Gender</FormLabel>
      <RadioGroup
        row
        value={value}
        onChange={(event) => onChange(event.target.value as GenderSelection)}
        defaultValue={AllSelection.All}
        name="gender-group"
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
};

export default GenderSelect;
