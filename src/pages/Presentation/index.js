import React, { useState } from "react";

// react-router-dom components
import { useNavigate } from "react-router-dom";

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

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function Presentation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial signin state

  const handleSignOut = () => {
    // Clear user authentication tokens or session data
    // For example, if you are using localStorage:
    localStorage.removeItem("authToken");
  
    // Update the login state
    setIsLoggedIn(false);
  };
  
  const navigate = useNavigate();

  const handleStart = () => {
    if (isLoggedIn) {
      // Redirect to a different page if the user is logged in
      navigate("http://localhost:3000/pages/landing-pages/contact-us");
    } else {
      // Redirect to the login page if the user is not logged in
      navigate("http://localhost:3000/pages/authentication/sign-in"); // Replace "/authentication/sign-in" with the login page URL
    }
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: isLoggedIn ? "#" : "http://localhost:3000/pages/authentication/sign-in",
          label: isLoggedIn ? "Log out" : "Sign in",
          color: "default",
        }}
        transparent
        light
        onActionClick={isLoggedIn ? handleSignOut : undefined}
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
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
            <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }} onClick={handleStart}>
              start
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

export default Presentation;
