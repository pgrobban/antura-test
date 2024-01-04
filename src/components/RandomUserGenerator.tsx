"use client";
import { RandomUserResponse, isSuccessResponse } from "@/helpers/types";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import RandomUserService from "../helpers/RandomUserService";
import GeneratorOptions from "./GeneratorOptions";
import UserCard from "./UserCard";
import LoadingCircle from "./LoadingCircle";

const service = new RandomUserService();

interface Props {}

const RandomUserGenerator: React.FC<Props> = (props: Props) => {
  const [response, setResponse] = useState<RandomUserResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setResponse(null);
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
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LoadingCircle />
          </div>
        )}
      </Grid>
      <Grid item xs={12} md={4}>
        <GeneratorOptions isLoading={isLoading} fetchData={fetchData} />
      </Grid>
    </Grid>
  );
};

export default RandomUserGenerator;
