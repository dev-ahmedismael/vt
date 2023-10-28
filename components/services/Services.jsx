"use client";
import { setPages } from "@/store/pagesSlice";
import Section from "@/templates/Section";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import urlsList from "@/public/data/urlsList.json";
import axios from "axios";
import CenteredSection from "@/templates/CenteredSection";
import RtlSection from "@/templates/RtlSection";
import LtrSection from "@/templates/LtrSection";
import Title from "@/templates/Title";
import Interested from "../interested/Interested";
import Associated from "@/templates/Associated";

const Services = () => {
  const pathname = usePathname();
  const [page, setPage] = useState([]);
  const url = urlsList.pages;
  const baseUrl = urlsList.baseUrl;

  const contents = page?.contents;

  const primaryContent = contents?.find(
    (content) => content.content_type === "primary"
  );
  const secondaryContent = contents?.find(
    (content) => content.content_type === "secondary"
  );

  const textContent = contents?.filter(
    (content) => content.content_type === "text_only"
  );
  const textWithImgContent = contents?.filter(
    (content) => content.content_type === "text_with_image"
  );
  const companiesContent = contents?.find(
    (content) => content.content_type === "companies"
  );

  useEffect(() => {
    axios.get(url).then((res) => {
      let pages = res.data;
      let foundPage = pages.find(
        (page) => `/ar/services/${page.slug}` == pathname
      );
      setPage(foundPage);
    });
  }, []);
  return (
    <Box py={5} sx={{ direction: "rtl" }}>
      {primaryContent && (
        <CenteredSection
          title={primaryContent.title_ar}
          description={primaryContent.content_ar}
        />
      )}
      {secondaryContent && (
        <section>
          <Container>
            <Box py={5} sx={{ direction: "rtl" }}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <img
                      src={`${baseUrl}/${secondaryContent.file_1}`}
                      alt="Illustrative image"
                      width={"100%"}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    height={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    {secondaryContent.title_ar !== "na" && (
                      <Box width={"fit-content"}>
                        <Title>
                          <Typography color={"white"} variant="h4">
                            {secondaryContent.title_ar}
                          </Typography>
                        </Title>
                      </Box>
                    )}

                    <Typography variant="h6">
                      {secondaryContent.content_ar}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </section>
      )}
      {textWithImgContent?.length !== 0 &&
        textWithImgContent?.map((content) => (
          <Box key={content.id}>
            <LtrSection
              title={content.title_ar}
              description={content.content_ar}
              imgUrl={`${baseUrl}/${content.file_1}`}
            />
          </Box>
        ))}
      {textContent?.length !== 0 &&
        textContent?.map((content) => (
          <Box key={content.id}>
            <Section>
              <Container>
                <Box py={5}>
                  {content.title_ar !== "na" && (
                    <Typography variant="h5" color={"white"} mb={5}>
                      {content.title_ar}
                    </Typography>
                  )}
                  {content.content_ar !== "na" && (
                    <Typography whiteSpace={"pre-wrap"}>
                      {content.content_ar}
                    </Typography>
                  )}
                </Box>
              </Container>
            </Section>
          </Box>
        ))}
      {companiesContent && (
        <Associated
          images={[
            companiesContent?.file_1,
            companiesContent?.file_2,
            companiesContent?.file_3,
            companiesContent?.file_4,
            companiesContent?.file_5,
            companiesContent?.file_6,
            companiesContent?.file_7,
            companiesContent?.file_8,
            companiesContent?.file_9,
            companiesContent?.file_10,
            companiesContent?.file_11,
            companiesContent?.file_12,
            companiesContent?.file_13,
            companiesContent?.file_14,
            companiesContent?.file_15,
            companiesContent?.file_16,
            companiesContent?.file_17,
            companiesContent?.file_18,
            companiesContent?.file_19,
            companiesContent?.file_20,
            companiesContent?.file_21,
            companiesContent?.file_22,
            companiesContent?.file_23,
            companiesContent?.file_24,
            companiesContent?.file_25,
          ]}
        />
      )}
      <Interested />
    </Box>
  );
};

export default Services;
