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
  const [contents, setContents] = useState([]);
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
      });
      if (response.status === 200) {
        const { content } = response.data;
        setContents(content);
      }else {
        throw new Error("Failed to fetch contents name");
    }
    } catch (error) {
      console.log("Failed to fetch contents name:", error);
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
        <Grid container spacing={3} sx={{ mt: 8 }} >
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard name={contents.song_name} />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
        </Grid>
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
        <Grid container spacing={3} sx={{ mt: 8 }} >
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard name={contents.movie_name} />
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
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
    
  );
}

export default Information;
