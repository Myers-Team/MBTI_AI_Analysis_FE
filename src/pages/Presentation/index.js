import React from "react";
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

function Presentation() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = location.state?.isAuthenticated || false;

  const handleStart = () => {
    navigate("/pages/landing-pages/contact-us");
    /*
    if (isAuthenticated) {
      navigate("/pages/landing-pages/contact-us");
    } else {
      navigate("/pages/authentication/sign-in");
    }
    */
  };

  const handleLogout = () => {
    // 로그아웃 버튼을 클릭할 때 호출되는 함수
    // 토큰을 제거하는 동작을 수행합니다.
    // 예시로 localStorage에서 토큰을 제거하는 코드를 작성하였습니다.
    localStorage.removeItem("token");

    navigate("/presentation", { state: { isAuthenticated: false } }); //로그아웃 후 메인 페이지로 이동
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: isAuthenticated ? "/presentation" : "/pages/authentication/sign-in",
          label: isAuthenticated ? "log out" : "sign in",
          color: "default",
          onClick: handleLogout,
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
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              MBTI TEST
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              this is mbti test website
            </MKTypography>
            <div style={{ display: "flex", gap: "10px" }}>
            <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }} onClick={handleStart}>
              start
            </MKButton>
            <MKButton color="dark" sx={{ color: ({ palette: { white } }) => white.main }} onClick={handleStart}>
              ideal-start
            </MKButton>
            </div>
          </Grid>
        </Container>
      </MKBox>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              precise-start
            </MKButton>
            <MKButton color="dark" sx={{ color: ({ palette: { white } }) => white.main }}>
              pecise-idle start
            </MKButton>
            </div>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
