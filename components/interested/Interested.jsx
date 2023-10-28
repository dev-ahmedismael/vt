"use client";
import Section from "@/templates/Section";
import Title from "@/templates/Title";
import { Box, Grid, Typography, Container } from "@mui/material";
import React, { useState } from "react";
import InterestedForm from "./InterestedForm";

const Interested = () => {
  return (
    <>
      <Section>
        <Container>
          <Box py={5} sx={{ direction: "rtl" }}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={5}>
                <Box width={"fit-content"}>
                  <Title>
                    <Typography variant="h4" color={"white"}>
                      هل انت مهتم؟
                    </Typography>
                  </Title>
                </Box>
                <Typography variant={"h6"} mb={3}>
                  هل ترغب في أن نرسل لك عرض أسعار؟
                </Typography>
                <img
                  src="/images/company_call_center.png"
                  alt="contact us"
                  width={"100%"}
                />
              </Grid>
              <Grid item xs={12} sm={7}>
                <InterestedForm />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default Interested;
