import LtrSection from "@/templates/LtrSection";
import SOS from "@/templates/SOS";
import SecBtn from "@/templates/SecBtn";
import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const HomeAboutUs = ({ dict, lang }) => {
  const section = {
    title: dict.home.about_us.title,
    description: dict.home.about_us.description,
    imgUrl: "/images/backup.png",
    btnUrl: `/${lang}/about-us`,
    btnContent: dict.home.about_us.button,
  };
  return (
    <SOS>
      <section>
        <Container>
          <Box bgcolor={"#0c1933"} borderRadius={5} overflow={"hidden"}>
            <Container>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <Box py={5}>
                    <Box width={"fit-content"} mb={5}>
                      <Title>
                        <Typography variant="h3" color={"white"} mb={3}>
                          {section.title}
                        </Typography>
                      </Title>
                    </Box>
                    <Typography mb={5}>{section.description}</Typography>
                    <Link href={section.btnUrl}>
                      <SecBtn>{section.btnContent}</SecBtn>
                    </Link>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"flex-end"}
                >
                  <img
                    src={section.imgUrl}
                    alt={section.title}
                    width={"100%"}
                    className={lang === "ar" ? "reverse-img" : undefined}
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Container>
      </section>
    </SOS>
  );
};

export default HomeAboutUs;
