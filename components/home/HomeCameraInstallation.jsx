"use client";
import { register } from "swiper/element/bundle";
import React, { useEffect, useRef } from "react";
import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import Section from "@/templates/Section";

register();

const HomeCameraInstallation = ({ dict, lang }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      autoplay: true,
      pagination: { clickable: true },
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <Section>
      <Container>
        <Box py={5}>
          <Box display={"flex"} justifyContent={"center"} mb={5}>
            <Title>
              <Typography color={"white"} variant="h4" textAlign={"center"}>
                {dict.home.camera_installation.title}
              </Typography>
            </Title>
          </Box>
          <Typography textAlign={"center"} mb={5}>
            {dict.home.camera_installation.description}
          </Typography>
          <Box>
            <swiper-container
              ref={swiperRef}
              init="false"
              space-between="30"
              autoplay-delay="2500"
              autoplay-disable-on-interaction="false"
            >
              {dict.home.camera_installation.steps.map((step) => (
                <swiper-slide key={step.id}>
                  <Grid container spacing={5}>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                    >
                      <Typography variant="h6">{step.content}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <img
                        src={step.img}
                        alt="Camera Installation"
                        width={"100%"}
                        className={lang === "ar" ? "reverse-img" : undefined}
                      />
                    </Grid>
                  </Grid>
                </swiper-slide>
              ))}
            </swiper-container>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default HomeCameraInstallation;
