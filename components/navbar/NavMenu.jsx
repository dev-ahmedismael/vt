"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { blue, indigo, lime } from "@mui/material/colors";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const NavMenu = ({ pages, dict, lang }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      height={"100%"}
    >
      <Button onClick={() => setIsMenuActive(!isMenuActive)}>
        <MenuIcon fontSize="large" sx={{ color: "white" }} />
      </Button>

      <Box
        position={"absolute"}
        zIndex={10}
        top={70}
        left={0}
        width={"100%"}
        bgcolor={"#010e28"}
      >
        <Container>
          <Box
            className={isMenuActive ? "open-navmenu" : "close-navmenu"}
            borderRadius={2}
            overflow={"hidden"}
          >
            <Box
              borderRadius={1}
              onClick={() => setIsMenuActive(!isMenuActive)}
              my={5}
            >
              <Container>
                <Link href={`/${lang}`}>
                  <Typography>{dict.navbar.home}</Typography>
                </Link>
              </Container>
            </Box>
            <Box
              mb={5}
              borderRadius={1}
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              <Container>
                <Link href={`/${lang}/about-us`}>
                  <Typography> {dict.navbar.about_us}</Typography>
                </Link>
              </Container>
            </Box>
            {pages.map((page) => (
              <Box key={page.id} my={4}>
                <Accordion
                  sx={{
                    boxShadow: 0,
                    bgcolor: "transparent",
                    color: "inherit",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#9fb3c8" }} />}
                    aria-controls="panel1a-content"
                    id={page.id}
                  >
                    <Typography>{page.title_ar}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {page.pages.map((subPage) => (
                      <Box
                        key={subPage.id}
                        display={"flex"}
                        mb={2}
                        onClick={() => setIsMenuActive(!isMenuActive)}
                      >
                        <Link href={`/ar/services/${subPage.slug}`}>
                          <Typography ml={2}>{subPage.title_ar}</Typography>
                        </Link>
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))}
            <Box
              borderRadius={1}
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              <Container>
                <Link href={`/${lang}/contact-us`}>
                  <Typography mb={5}> {dict.navbar.contact_us}</Typography>
                </Link>
              </Container>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default NavMenu;
