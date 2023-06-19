import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import footerRoutes from "footer.routes";

// axios
import axios from "axios";

function ContactUs() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  // 사용자 ID 추가
  const [userId, setUserId] = useState(1); // eslint-disable-line no-unused-vars
  const [qaId, setQaId] = useState(0); // eslint-disable-line no-unused-vars

  const navigate = useNavigate(); // eslint-disable-line no-unused-vars

  useEffect(() => {
    // Fetch the question from the Spring Boot backend
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      // Make an API request to fetch the question
      const response = await axios.get("http://cors-anywhere.herokuapp.com/http://3.35.85.202:8123/mbti/test/personal", {
        params: {
          user_id: userId, // 사용자 식별 값을 전달합니다.
        },
      });
      
      if (response.status === 200) {
        setQuestion(response.data.question);
      } 
      else {
        // Handle error response
        console.log("Failed to fetch question");
        // no qeuestion remains
        navigate("/pages/landing-pages/result");
      }
    } catch (error) {
      // Handle fetch error
      console.log("Failed to fetch question:", error);
    }
    // 다음 질문을 가져오기 위해 userId 갱신
  setUserId(prevUserId => prevUserId + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make an API request to submit the answer
      const response = await axios.post("http://cors-anywhere.herokuapp.com/http://3.35.85.202:8123/mbti/test/personal", { userId, answer }); // Replace with the actual API endpoint
    
      if (response.status === 200) {
        // Clear the answer input
        setAnswer("");

        // Fetch the next question
        await fetchQuestion();
      }
      else {
        // Handle error response
        console.log("Failed to submit answer");
      }
    } catch (error) {
      // Handle fetch error
      console.log("Failed to submit answer:", error);
    }
  };

  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
      </MKBox>
      <Grid container spacing={3} alignItems="center">
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100%)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: 'linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2)' }}
          >
        <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                MBTI TEST
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3} style={{ fontSize: "32px" }}>
                {question}
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      placeholder="Answer"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={12}
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    NEXT
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
          </Grid>
        </Grid>
        </MKBox>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
