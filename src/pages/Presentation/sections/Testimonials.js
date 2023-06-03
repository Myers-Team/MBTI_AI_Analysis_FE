import React, { useState, useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

import axios from "axios";

function Information() {
  const [songReviews, setSongReviews] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    fetchSongReviews();
  }, []);

  useEffect(() => {
    fetchMovieReviews();
  }, []);

  const fetchSongReviews = async () => {
    try {
      const response = await axios.get("/api/song-reviews");
      if (response.status !== 200) {
        throw new Error("Failed to fetch song reviews");
      }
      setSongReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchMovieReviews = async () => {
    try {
      const response = await axios.get("/api/movie-reviews");
      if (response.status !== 200) {
        throw new Error("Failed to fetch movie reviews");
      }
      setMovieReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">song recommend</MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              //name="song title"
              name={songReviews.length > 0 ? songReviews[0].name : ''}
              //review="song lycis"
              review={songReviews.length > 0 ? songReviews[0].review : ''}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name={songReviews.length > 0 ? songReviews[0].name : ''}
              review={songReviews.length > 0 ? songReviews[0].review : ''}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name={songReviews.length > 0 ? songReviews[0].name : ''}
              review={songReviews.length > 0 ? songReviews[0].review : ''}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
        </Grid>
      </Container>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">movie recommend</MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name={movieReviews.length > 0 ? movieReviews[0].name : ''}
              review={movieReviews.length > 0 ? movieReviews[0].review : ''}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name={movieReviews.length > 0 ? movieReviews[0].name : ''}
              review={movieReviews.length > 0 ? movieReviews[0].review : ''}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name={movieReviews.length > 0 ? movieReviews[0].name : ''}
              review={movieReviews.length > 0 ? movieReviews[0].review : ''}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
    
  );
}

export default Information;
