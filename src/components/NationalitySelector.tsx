import { Nationality } from "@/helpers/types";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

const allNationalities = Object.values(Nationality);

interface Props {
  value: Nationality[];
  onChange: (newNationalitiesSelected: Nationality[]) => void;
}

const NationalitySelector: React.FC<Props> = ({ value, onChange }) => {
  const allChecked = allNationalities.length === value.length;

  const handleChange = (newValue: string | Nationality[]) => {
    // don't handle click on select/deselect all as a separate check
    if (
      typeof newValue !== "string" &&
      newValue.includes("all" as Nationality)
    ) {
      return;
    }

    // on autofill we get a stringified value
    const newNationalities =
      typeof newValue === "string"
        ? (newValue.split(",") as Nationality[])
        : newValue;
    onChange(newNationalities);
  };

  const handleSelectDeselectAll = () => {
    if (allChecked) {
      handleChange([]);
    } else {
      handleChange(Object.values(Nationality));
    }
  };

  return (
    <div>
      <FormControl className="nationality-select">
        <InputLabel id="nationality-label">Select nationalities</InputLabel>
        <Select
          labelId="nationality-label"
          multiple
          value={value}
          onChange={(event) => handleChange(event.target.value)}
          input={<OutlinedInput label="Select nationalities" />}
          renderValue={(selected) => selected.join(", ")}
        >
          <MenuItem onClick={handleSelectDeselectAll} value="all">
            <Checkbox checked={allChecked} />
            <ListItemText>Select/deselect all</ListItemText>
          </MenuItem>
          {allNationalities.map((nationality) => (
            <MenuItem key={nationality} value={nationality}>
              <Checkbox checked={value.indexOf(nationality) > -1} />
              <ListItemText primary={nationality} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default NationalitySelector;
