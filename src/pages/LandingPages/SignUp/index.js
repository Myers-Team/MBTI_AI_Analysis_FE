import { useState } from "react";

// react-router-dom components
import { useNavigate } from "react-router-dom";

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

function SignUpBasic() {
  const [nickname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const handleSignUp = () => {
    // Perform the signup process using the name, email, and password
    console.log("Name:", nickname);
    console.log("Email:", email);
    console.log("Password:", password);
  
    // Make a POST request to the server for signup
    axios
      .post("http://cors-anywhere.herokuapp.com/http://3.35.85.202:8123/user/user", { nickname, email, password })
      .then((response) => {
        console.log("Signup response:", response); //check response
        // Check if signup is successful
        if (response.status === 200) {
          // If signup is successful, navigate to the main page or desired page
          navigate("/pages/authentication/sign-in"); // Replace "/main" with the desired page URL
        } else {
          // Handle signup failure logic
          console.log("Signup failed:", response.data.error);
        }
      })
      .catch((error) => {
        // Handle exception/error logic
        console.error("Error during signup request:", error);
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
                  Sign up
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                  <MKInput
                      type="text"
                      label="name"
                      value={nickname}
                      onChange={handleNameChange}
                      fullWidth
                  />
                  </MKBox>
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
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth onClick={handleSignUp}>
                      sign up
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
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

export default SignUpBasic;