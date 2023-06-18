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
  const [songs, setSongs] = useState([]);
  // 사용자 ID 추가
  const [userId, setUserId] = useState(1); // eslint-disable-line no-unused-vars

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    try {
      const response = await axios.get("http://cors-anywhere.herokuapp.com/http://3.35.85.202:8123/contents", {
        params: {
          user_id: userId, // 사용자 식별 값을 전달합니다.
        },
      });//song
      if (response.status === 200) {
        const songs = response.data;
        setSongs(songs);
      }else {
        throw new Error("Failed to fetch song name");
    }
    } catch (error) {
      console.log("Failed to fetch song name:", error);
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
        {songs.map((songs) => (
          <Grid item xs={12} md={6} lg={4} key={songs.id}>
            <DefaultReviewCard name={songs.song_name} />
          </Grid>
        ))}
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
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
    
  );
}

export default Information;
