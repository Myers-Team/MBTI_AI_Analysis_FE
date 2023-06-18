import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// authcontext
import AuthContext from "AuthContext";


function Statistic() {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext); // AuthContext에서 상태 가져오기

  const handleLogout = () => {
    // 로그아웃 버튼을 클릭할 때 호출되는 함수
    // 토큰을 제거하는 동작을 수행합니다.
    // 예시로 localStorage에서 토큰을 제거하는 코드를 작성하였습니다.
    localStorage.removeItem("token");
    navigate("/presentation", { state: { isAuthenticated: false } }); //로그아웃 후 메인 페이지로 이동
  };

  useEffect(() => {
    if(isAuthenticated){
      setIsAuthenticated(true);
    }
    else{
      setIsAuthenticated(false);
    }
  }, [setIsAuthenticated]);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          //route: isAuthenticated ? "/presentation" : "/pages/authentication/sign-in",
          //label: isAuthenticated ? "log out" : "sign in",
          route: isAuthenticated ? "/presentation" : "/pages/authentication/sign-in",
          label: isAuthenticated ? "log out" : "sign in",
          color: "info",
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
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              mbti statistic{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              mbti question and answer statistic
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />

        <MKBox pt={18} pb={6}>
          <Container>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Statistic;
