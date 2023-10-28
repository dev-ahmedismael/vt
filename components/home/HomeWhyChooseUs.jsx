import React from "react";
import RoundedCard from "@/templates/RoundedCard";
import SOS from "@/templates/SOS";
import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

const HomeWhyChooseUs = ({ dict, lang }) => {
  return (
    <SOS>
      <section className="section-with-cards">
        <Container>
          <Box py={10}>
            <Box display={"flex"} justifyContent={"center"}>
              <Title>
                <Typography variant="h3" color={"white"}>
                  {dict.home.why_choose_us.title}
                </Typography>
              </Title>
            </Box>
            <Typography variant="h5" textAlign={"center"} mt={5} mb={10}>
              {dict.home.why_choose_us.description}
            </Typography>
            <Grid container spacing={5} justifyContent={"center"}>
              {dict.home.why_choose_us.cards.map((card) => (
                <Grid key={card.id} item xs={12} sm={4}>
                  <SOS>
                    <Link href={""}>
                      <RoundedCard
                        title={card.title}
                        description={card.description}
                        boxColor={card.boxColor}
                        section={dict.home.why_choose_us}
                      />
                    </Link>
                  </SOS>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </section>
    </SOS>
  );
};

export default HomeWhyChooseUs;
