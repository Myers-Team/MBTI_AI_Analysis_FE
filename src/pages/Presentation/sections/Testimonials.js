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
      });
      if (response.status === 200) {
        const { song } = response.data;
        setSongs(song);
      }else {
        throw new Error("Failed to fetch contents name");
    }
    } catch (error) {
      console.log("Failed to fetch contents name:", error);
    }
  };
console.log(songs);
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
          {/* <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard name={songs.song_name} />
              </Grid> */}
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard name="으르렁" review="... 그녀 곁에서 모두 다 물러나 이젠 조금씩 사나워진다 나 으르렁 으르렁 으르렁 대 나 으르렁 으르렁 으르렁 대 나 으르렁 으르렁 으르렁 대 너 물러서지 않으면 다쳐도 몰라 ..."/>
            
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard name="너랑 나" review="... 시곌 보며 속삭이는 비밀들 간절한 내 맘속 이야기 지금 내 모습을 헤쳐도 좋아 나를 재촉하면 할수록 좋아 내 이름 불러줘 손 틈새로 비치는 내 맘 들킬까 두려워 가슴이 막 벅차 서러워 조금만 꼭 참고 날 기다려줘 ..."/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard name="강남스타일" review="...오빤 강남스타일 강남스타일n낮에는 따사로운 인간적인 여자 커피 한잔의 여유를 아는 품격 있는 여자 밤이 오면 심장이 뜨거워지는 여자 그런 반전 있는 여자 나는 사나이..."/>
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
