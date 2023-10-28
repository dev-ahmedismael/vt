import RtlSection from "@/templates/RtlSection";
import SecBtn from "@/templates/SecBtn";
import Section from "@/templates/Section";
import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const HomeCameraContract = ({ dict, lang }) => {
  return (
    <Section>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <img
            src="/images/home_camera.png"
            alt={"Home Camera"}
            width={"100%"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Container>
            <Box py={5}>
              <Title>
                <Typography
                  variant="h3"
                  color={"white"}
                  mb={3}
                  textAlign={"center"}
                >
                  {dict.home.home_camera_contract.title}
                </Typography>
              </Title>
              <Typography lineHeight={2} mb={5} textAlign={"center"}>
                {dict.home.home_camera_contract.description}
              </Typography>
              <Box display={"flex"} justifyContent={"space-around"}>
                <Box>
                  <Link href={"https://ccm.vision-things.com/"}>
                    <SecBtn>{dict.home.home_camera_contract.button_1}</SecBtn>
                  </Link>
                </Box>
                <Box>
                  <Link href={`/${lang}/contract-renew`}>
                    <SecBtn>{dict.home.home_camera_contract.button_2}</SecBtn>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Section>
  );
};

export default HomeCameraContract;
