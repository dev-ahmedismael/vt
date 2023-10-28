import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const ServicesHeader = () => {
  return (
    <header>
      <Container>
        <Grid
          container
          spacing={5}
          display={"flex"}
          justifyContent={"space-between"}
          height={500}
        >
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
                اعرف اكثر
              </Typography>
            </Title>
            <Typography variant="h3" color={"#51a29d"} my={2}>
              عن خدماتنا...
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <img src="/images/ai_2.png" alt="Brain" width={"100%"} />
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default ServicesHeader;
