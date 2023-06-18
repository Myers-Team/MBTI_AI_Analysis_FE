import { useState, useEffect, useContext } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// axios
import axios from "axios";
// jwt
//import jwt_decode from "jwt-decode";
// authcontext
import AuthContext from "AuthContext";

function SignInBasic() {
  const navigate = useNavigate();
  // AuthContext에서 상태 가져오기
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext); // eslint-disable-line no-unused-vars
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      //const decodedToken = jwt_decode(token);
      // Perform any necessary token validation checks
      setIsAuthenticated(true);
    }
  }, []);

  const handleSignIn = () => {
    axios
      .post("http://cors-anywhere.herokuapp.com/http://3.35.85.202:8123/user/signin", { email, password })
      .then((response) => {
        const { token } = response.data;
        //const decodedToken = jwt_decode(token);

        // Store the token in local storage or a secure storage mechanism
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
        navigate("/presentation", { state: { isAuthenticated: true } });
      })
      .catch((error) => {
        console.log("Failed to signin:", error);
      });
  };

  return (
    <>
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: 'linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign in
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                  <MKInput
                    type="email"
                    label="Email"
                    value={email}
                    onChange={handleEmailChange}
                    fullWidth
                  />
                  </MKBox>
                  <MKBox mb={2}>
                  <MKInput
                    type="password"
                    label="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    fullWidth
                  />
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth onClick={handleSignIn}>
                      sign in
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <MKTypography
                        component={Link}
                        to="/pages/authentication/sign-up"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default SignInBasic;
