import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  Toolbar,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { movieApi } from "../../../apis/movie.api";
import Banner from "./_banner/Banner";
export default function HomePage() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["moiveList"],
    queryFn: () => movieApi.getMovieList(),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong</p>;
  }

  const movieData = data ? data : [];
  return (
    <Box>
      <Banner />
      <Grid2 container spacing={3}>
        {movieData.map((item) => {
          return (
            <Grid2 size={3} key={item.maPhim}>
              <Card sx={{ borderRadius: 2 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{ height: 500 }}
                    image={item.hinhAnh}
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontWeight: 600 }}
                      noWrap
                      variant="h6"
                      component="h3"
                    >
                      {item.tenPhim}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
}
