"use client";
import { RandomUserResponse } from "@/helpers/types";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import RandomUserService from "../helpers/RandomUserService";

const service = new RandomUserService();

interface Props {}

const RandomUserCard: React.FC<Props> = (props: Props) => {
  const [response, setResponse] = useState<RandomUserResponse | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setResponse(await service.fetchRandomUser());
    };
    fetchData();
  }, []);
  console.log("***", response);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        <span>xs=6 md=8</span>
      </Grid>
      <Grid item xs={6} md={4}>
        <span>xs=6 md=4</span>
      </Grid>
      <Grid item xs={6} md={4}>
        <span>xs=6 md=4</span>
      </Grid>
      <Grid item xs={6} md={8}>
        <span>xs=6 md=8</span>
      </Grid>
    </Grid>
  );
};

export default RandomUserCard;
