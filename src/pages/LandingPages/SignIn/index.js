import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// axios
import axios from "axios";

function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    // 이메일과 비밀번호를 이용하여 로그인 처리를 수행합니다.
    console.log("Email:", email);
    console.log("Password:", password);
    // 로그인 처리를 위해 서버에 POST 요청을 보냅니다.
    axios
      .post("http://3.35.85.202:8123/user/signin", { email, password })
      .then((response) => {
        // 로그인 성공 여부를 확인합니다.
        if (response.data.success) {
          // rememberMe 상태가 true인 경우, 토큰을 쿠키에 저장합니다.
          if (rememberMe) {
            document.cookie = `token=${response.data.token}; path=/; max-age=604800`; // 7일 동안 쿠키 유지
          }
          // 로그인 성공 시에 메인 페이지로 이동합니다.
          navigate("/presentation");
        } else {
          // 로그인 실패 시에 처리 로직을 구현합니다.
          console.log("로그인 실패: ", response.data.error);
        }
      })
      .catch((error) => {
        // 예외 처리 로직을 구현합니다.
        console.error("로그인 요청 중 오류 발생: ", error);
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
          backgroundImage: 'url("images/overlay2.png"), url("images/overlay3.svg"), linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2)',
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
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
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
