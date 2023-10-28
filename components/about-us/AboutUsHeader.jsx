import Title from "@/templates/Title";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const AboutUsHeader = ({ dict, lang }) => {
  return (
    <header>
      <Container>
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            sm={4}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Title>
              <Typography variant="h2" color={"white"}>
                {dict.about_us.title_1}
              </Typography>
            </Title>
            <Typography variant="h3" color={"#51a29d"} my={2}>
              {dict.about_us.title_2}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <img
              src="/images/about_brain.png"
              alt="Brain"
              width={"100%"}
              className={lang === "ar" ? "reverse-img" : undefined}
            />
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default AboutUsHeader;
