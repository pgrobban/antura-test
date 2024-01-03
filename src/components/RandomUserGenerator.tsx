"use client";
import { RandomUserResponse, isSuccessResponse } from "@/helpers/types";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import RandomUserService from "../helpers/RandomUserService";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import UserCard from "./UserCard";

const LoadingCircle = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

const service = new RandomUserService();

interface Props {}

const RandomUserCard: React.FC<Props> = (props: Props) => {
  const [response, setResponse] = useState<RandomUserResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setResponse(null);
    const fetchData = async () => {
      setResponse(await service.fetchRandomUser());
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        {response && isSuccessResponse(response) && (
          <UserCard user={response.results[0]} />
        )}
      </Grid>
      <Grid item xs={12} md={4}>
        <span></span>
      </Grid>
    </Grid>
  );
};

export default RandomUserCard;
