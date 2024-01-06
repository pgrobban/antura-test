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

const allNationalityKeys = Object.keys(Nationality);
const sortedNationalityKeys = allNationalityKeys.sort();

interface Props {
  value: Nationality[];
  onChange: (newNationalitiesSelected: Nationality[]) => void;
}

const NationalitySelector: React.FC<Props> = ({ value, onChange }) => {
  const allChecked = allNationalityKeys.length === value.length;

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
          renderValue={(selectedNationalities) =>
            `${selectedNationalities.length} selected`
          }
        >
          <MenuItem onClick={handleSelectDeselectAll} value="all">
            <Checkbox checked={allChecked} />
            <ListItemText>Select/deselect all</ListItemText>
          </MenuItem>
          {sortedNationalityKeys.map((nationalityKey) => {
            const nationality =
              Nationality[nationalityKey as keyof typeof Nationality];
            return (
              <MenuItem key={nationalityKey} value={nationality}>
                <Checkbox checked={value.indexOf(nationality) > -1} />
                <ListItemText primary={nationalityKey} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default NationalitySelector;
