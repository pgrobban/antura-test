"use client";
import {
  AllSelection,
  GenderSelection,
  Nationality,
  RandomUserResponse,
  isSuccessResponse,
} from "@/helpers/types";
import { Box, Drawer, Grid } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import RandomUserService from "../helpers/RandomUserService";
import GeneratorOptions from "./GeneratorOptions";
import UserCard from "./UserCard";
import LoadingCircle from "./LoadingCircle";

const service = new RandomUserService();
const allNationalities = Object.values(Nationality);

interface Props {
  showDrawerInGrid: boolean;
  drawerOpen: boolean;
  toggleDrawerOpen: (forceOpenOrClose?: boolean) => void;
}

export interface RandomUserGeneratorState {
  genderSelected: GenderSelection;
  nationalitiesSelected: Nationality[];
}

const RandomUserGenerator: React.FC<Props> = ({
  showDrawerInGrid,
  drawerOpen,
  toggleDrawerOpen,
}) => {
  const [response, setResponse] = useState<RandomUserResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [state, setState] = useState<RandomUserGeneratorState>({
    genderSelected: AllSelection.All,
    nationalitiesSelected: allNationalities,
  });

  const fetchData = useCallback(async () => {
    setResponse(null);
    service.setGenerateFromGender(state.genderSelected);
    service.setGenerateFromNationalities(state.nationalitiesSelected);
    setResponse(await service.fetchRandomUser());
    setIsLoading(false);
    toggleDrawerOpen(false);
  }, [state.genderSelected, state.nationalitiesSelected, toggleDrawerOpen]);

  useEffect(() => {
    fetchData();
  }, []);

  const generatorOptionsProps = {
    state,
    setState,
    isLoading,
    fetchData,
  };

  return (
    <>
      <Grid className="user-generator" container spacing={2}>
        <Grid item xs={12} md={8}>
          {response && isSuccessResponse(response) && (
            <UserCard user={response.results[0]} />
          )}
          {response && !isSuccessResponse(response) && (
            <div>
              An error ocurred while generating the user. Please try again
              later.
            </div>
          )}
          {isLoading && (
            <div className="loading-circle">
              <LoadingCircle />
            </div>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          {showDrawerInGrid && <GeneratorOptions {...generatorOptionsProps} />}
        </Grid>
      </Grid>
      {!showDrawerInGrid && (
        <Drawer
          className="drawer"
          anchor="right"
          open={drawerOpen}
          onClose={() => toggleDrawerOpen}
        >
          <Box sx={{ width: 300 }}>
            <GeneratorOptions {...generatorOptionsProps} />
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default RandomUserGenerator;
