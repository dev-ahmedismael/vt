"use client";
import PrimaryBtn from "@/templates/PrimaryBtn";
import SOS from "@/templates/SOS";
import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import urlsList from "@/public/data/urlsList.json";
import axios from "axios";

const HomeHeader = ({ lang, dict }) => {
  const url = urlsList.visits;
  useEffect(() => {
    axios.post(url, { headers: { Accept: "application/json" } });
  }, []);
  return (
    <SOS>
      <header>
        <Container>
          <Grid container spacing={5}>
            <Grid
              item
              xs={12}
              sm={5}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Box width={"fit-content"}>
                <Title>
                  <Typography
                    variant={lang === "ar" ? "h3" : "h4"}
                    color={"white"}
                  >
                    {dict.home.header.title_1}
                  </Typography>
                </Title>
              </Box>
              <Typography
                variant={lang === "ar" ? "h4" : "h5"}
                color={"#51a29d"}
                my={2}
              >
                {dict.home.header.title_2}
              </Typography>
              <Link href={`/${lang}/contact-us`}>
                <PrimaryBtn>{dict.home.header.button}</PrimaryBtn>
              </Link>
            </Grid>
            <Grid item xs={12} sm={7}>
              <img
                src="/images/smart_home.png"
                alt="Brain"
                width={"100%"}
                className={lang === "ar" ? "reverse-img" : undefined}
              />
            </Grid>
          </Grid>
        </Container>
      </header>
    </SOS>
  );
};

export default HomeHeader;
