import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import axios from "axios";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = location.state?.isAuthenticated || false; // eslint-disable-line no-unused-vars

  const handleStart = () => {
    navigate("/presentation");
  };
/*
  const handleLogout = () => {
    // 로그아웃 버튼을 클릭할 때 호출되는 함수
    // 토큰을 제거하는 동작을 수행합니다.
    // 예시로 localStorage에서 토큰을 제거하는 코드를 작성하였습니다.
    localStorage.removeItem("token");

    navigate("/presentation", { state: { isAuthenticated: false } }); //로그아웃 후 메인 페이지로 이동
  };
*/
const [result, setResult] = useState("");
// 사용자 ID 추가
const [userId, setUserId] = useState(1); // eslint-disable-line no-unused-vars

  useEffect(() => {
    fetchResult();
  }, []);

  const fetchResult = async () => {
    try {
      const response = await axios.get("http://cors-anywhere.herokuapp.com/http://3.35.85.202:8123/mbti/result", {
        params: {
          user_id: userId, // 사용자 식별 값을 전달합니다.
        },
      });
      if (response.status !== 200) {
        throw new Error("Failed to fetch mbti result");
      }
      setResult(response.data);
    } catch (error) {
      console.error("failed to fetch mbti result:", error);
    }
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          //route: isAuthenticated ? "/presentation" : "/pages/authentication/sign-in",
          //label: isAuthenticated ? "log out" : "sign in",
          route: "/presentation",
          label: "log out",
          color: "default",
          //onClick: handleLogout,
        }}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: 'linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              MBTI RESULT :D
            </MKTypography>
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })} mt={1} mb={3}
              >
              {result}
              ISTP
            </MKTypography>
            <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }} onClick={handleStart}>
              go home
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Result;
