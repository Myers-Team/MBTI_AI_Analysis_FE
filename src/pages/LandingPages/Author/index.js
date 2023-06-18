import React, { useContext, useEffect } from "react"; // eslint-disable-line no-unused-vars
import { useNavigate } from "react-router-dom"; // eslint-disable-line no-unused-vars

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Author page sections
import Profile from "pages/LandingPages/Author/sections/Profile";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// authcontext
import AuthContext from "AuthContext";

function Author() {
  //const navigate = useNavigate();
  // AuthContext에서 상태 가져오기
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext); // eslint-disable-line no-unused-vars
/*
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
*/
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
          color: "info",
          //onClick: handleLogout,
        }}
        transparent
        light
      />
      
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: 'linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2)',
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
      {//isAuthenticated ? (
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
          <Profile />
        </Card>
      //) : null
    }
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Author;
