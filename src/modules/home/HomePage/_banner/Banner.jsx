import { useQuery } from "@tanstack/react-query";
import React from "react";
import { movieApi } from "../../../../apis/movie.api";
import Slider from "react-slick";
import { Box, CardMedia } from "@mui/material";

export default function Banner() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["movieBanner"],
    queryFn: () => movieApi.getBannerMovie(),
  });

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const bannerMovieList = data ? data : [];
  return (
    <div className="slider-container my-12">
      <Slider className="max-h-[200]px" {...settings}>
        {bannerMovieList.map((item) => {
          return (
            <Box key={item.maBanner}>
              <CardMedia
                component="img"
                image={item.hinhAnh}
                sx={{ width: "100%", height: "70vh", objectFit: "fill" }}
              />
            </Box>
          );
        })}
      </Slider>
    </div>
  );
}
