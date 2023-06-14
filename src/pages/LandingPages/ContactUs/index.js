import React, { useState, useEffect } from "react";

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

// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";

// axios
import axios from "axios";

function ContactUs() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    // Fetch the question from the Spring Boot backend
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      // Make an API request to fetch the question
      const response = await axios.get("http://3.35.85.202:8123/mbti/test/personal");

      if (response.status === 200) {
        setQuestion(response.data.question);
      } else {
        // Handle error response
        console.log("Failed to fetch question");
      }
    } catch (error) {
      // Handle fetch error
      console.log("Failed to fetch question:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make an API request to submit the answer
      const response = await axios.post("http://3.35.85.202:8123/mbti/test/personal", { answer }); // Replace with the actual API endpoint
    
      if (response.status === 200) {
        // Clear the answer input
        setAnswer("");
    
        // Fetch the next question
        await fetchQuestion();
      } else {
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
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
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
              <MKTypography variant="body2" color="text" mb={3}>
                Q.question
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
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
