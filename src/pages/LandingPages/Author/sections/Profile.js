import React, { useState, useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

import axios from "axios";

function Profile() {
  const [profilePicture, setProfilePicture] = useState("");
  const [stats, setStats] = useState([]);
  // 사용자 ID 추가
  const [userId, setUserId] = useState(1); // eslint-disable-line no-unused-vars

  useEffect(() => {
    fetchProfilePicture();
    fetchStats();
  }, []);

  const fetchProfilePicture = async () => {
    try {
      const response = await axios.get("http://cors-anywhere.herokuapp.com/http://3.35.85.202:8123/user/profile", {
        params: {
          user_id: userId, // 사용자 식별 값을 전달합니다.
        },
      });
      if (response.status !== 200) {
        throw new Error("Failed to fetch profile picture");
      }
      setProfilePicture(response.data);
    } catch (error) {
      console.error("failed to fetch picture:", error);
    }
  };
  const fetchStats = async () => {
    try {
      const response = await axios.get("http://cors-anywhere.herokuapp.com/http://3.35.85.202:8123/stats", {
        params: {
          user_id: userId, // 사용자 식별 값을 전달합니다.
        },
      });

      if (response.status === 200) {
        const stats = response.data;
        setStats(stats);
      } else {
        throw new Error("Failed to fetch stats");
      }
    } catch (error) {
      console.error("failed to fetch stats:", error);
    }
  };

  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">USERNAME</MKTypography>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    MBTI : &nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    ISTP
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    IDEALMBTI : &nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    ISTP
                  </MKTypography>
                </Grid>
              </Grid>
              {stats.map((stats, index) => (
                <MKTypography key={index} variant="body1" fontWeight="light" color="text">
                  Q{index + 1}. {stats.question} <br />
                  A. {stats.answer} <br /><br />
                </MKTypography>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
