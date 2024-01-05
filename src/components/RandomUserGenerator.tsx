"use client";
import {
  AllSelection,
  GenderSelection,
  Nationality,
  RandomUserResponse,
  isSuccessResponse,
} from "@/helpers/types";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import RandomUserService from "../helpers/RandomUserService";
import GeneratorOptions from "./GeneratorOptions";
import UserCard from "./UserCard";
import LoadingCircle from "./LoadingCircle";

const service = new RandomUserService();
const allNationalities = Object.values(Nationality);

interface Props {}

export interface RandomUserGeneratorState {
  genderSelected: GenderSelection;
  nationalitiesSelected: Nationality[];
}

const RandomUserGenerator: React.FC<Props> = (props: Props) => {
  const [response, setResponse] = useState<RandomUserResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [state, setState] = useState<RandomUserGeneratorState>({
    genderSelected: AllSelection.All,
    nationalitiesSelected: allNationalities,
  });

  const fetchData = async () => {
    setResponse(null);
    service.setGenerateFromGender(state.genderSelected);
    service.setGenerateFromNationalities(state.nationalitiesSelected);
    setResponse(await service.fetchRandomUser());
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid className="user-generator" container spacing={2}>
      <Grid item xs={12} md={8}>
        {response && isSuccessResponse(response) && (
          <UserCard user={response.results[0]} />
        )}
        {response && !isSuccessResponse(response) && (
          <div>
            An error ocurred while generating the user. Please try again later.
          </div>
        )}
        {isLoading && (
          <div className="loading-circle">
            <LoadingCircle />
          </div>
        )}
      </Grid>
      <Grid item xs={12} md={4}>
        <GeneratorOptions
          state={state}
          setState={setState}
          isLoading={isLoading}
          fetchData={fetchData}
        />
      </Grid>
    </Grid>
  );
};

export default RandomUserGenerator;
