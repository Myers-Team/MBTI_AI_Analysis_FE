/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    답변 통계
                    <br />
                    1번 질문
                  </>
                }
                description="사용자의 답변에 대한 통계입니다. 같은 질문에 대해 답변의 통계량을 알려드립니다"
              />
              <RotatingCardBack
                image={bgBack}
                title="당신은 낙관적인 편인가 비관적인 편인가요?"
                //description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented." //주석처리로 인한 warning 무시
                /*action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}*/ //action주석 처리로 인한 warning 무시
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="filter_1"
                  title="낙관적인 거 같습니다"
                  //description="43%"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="filter_2"
                  title="딱히 별 생각없습니다"
                  //description="35%"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="filter_3"
                  title="낙관적일 때도 있고 비관적일 때도 있습니다"
                  //description="21%"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="filter_4"
                  title="잘 모르겠습니다"
                  //description="1%"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <br/>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    이상형 답변 통계
                    <br />
                    1번 질문
                  </>
                }
                description="이상형 MBTI의 답변에 대한 통계입니다. 같은 질문에 대해 답변의 통계량을 알려드립니다"
              />
              <RotatingCardBack
                image={bgBack}
                title="당신은 낙관적인 편인가 비관적인 편인가요?"
                //description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented." //주석처리로 인한 warning 무시
                /*action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}*/ //action주석 처리로 인한 warning 무시
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="filter_1"
                  title="낙관적인 편입니다"
                  //description="67%"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="filter_2"
                  title="낙관적일 때도 있고 비관적일 때도 있습니다"
                  //description="21%"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="filter_3"
                  title="비관적인 편입니다"
                  //description="10%"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="filter_4"
                  title="잘 모르겠습니다"
                  //description="2%"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
