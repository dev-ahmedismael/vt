"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  emphasize,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaSnapchatGhost } from "react-icons/fa";
import SOS from "@/templates/SOS";

const Footer = ({ dict, lang }) => {
  const quickLinks = [
    { id: 1, title: dict.footer.home, url: `/${lang}` },
    { id: 2, title: dict.footer.about_us, url: `/${lang}/about-us` },
    // { id: 3, title: dict.footer.services, url: `/${lang}/our-services` },
    { id: 4, title: dict.footer.cameras_contract, url: `/${lang}/contract` },
    { id: 5, title: dict.footer.contact, url: `/${lang}/contact-us` },
  ];
  const policies = [
    {
      id: 1,
      title: dict.footer.terms_and_conditions,
      url: `/${lang}/terms-and-conditions`,
    },
    {
      id: 2,
      title: dict.footer.privacy_policy,
      url: `/${lang}/policy-and-privacy`,
    },
    {
      id: 3,
      title: dict.footer.exchange_and_return_policy,
      url: `/${lang}/exchange-and-return-policy`,
    },
  ];
  const contactInfo = [
    {
      id: 1,
      icon: <MyLocationIcon />,
      description: dict.footer.address,
    },
    { id: 2, icon: <PhoneEnabledIcon />, description: "00966581077506" },
    { id: 3, icon: <MailIcon />, description: "info@vision-things.com" },
  ];

  const socialMedia = [
    { id: 1, icon: <MailIcon />, url: "mailto:support@vision-things.com" },
    {
      id: 2,
      icon: <FacebookIcon />,
      url: "https://www.facebook.com/vision.thingsit/",
    },
    {
      id: 3,
      icon: <InstagramIcon />,
      url: "https://www.instagram.com/vision.thingsit/",
    },
    {
      id: 4,
      icon: (
        <Box pt={"3px"}>
          <FaSnapchatGhost fontSize={"large"} />
        </Box>
      ),
      url: "https://www.snapchat.com/add/vision.things?share_id=xrkqjJL43H8&locale=en-US",
    },
    {
      id: 5,
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/vision-things-it-916535255/",
    },
  ];

  return (
    <SOS>
      <footer>
        <Container>
          <Box py={5}>
            <Grid container spacing={5} mb={10}>
              <Grid item xs={12} sm={6} md={3}>
                <SOS>
                  <Box>
                    <img
                      src="/images/logo.png"
                      alt="Logo"
                      width={70}
                      height={70}
                    />
                  </Box>

                  <Typography my={2}>{dict.footer.description}</Typography>
                  <Box display={"flex"}>
                    {socialMedia.map((e) => (
                      <Box key={e.id} mr={1}>
                        <Link href={e.url} target="_blank">
                          {e.icon}
                        </Link>
                      </Box>
                    ))}
                  </Box>
                </SOS>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <SOS>
                  <Typography variant="h6" color={"white"} mb={5}>
                    {dict.footer.quick_links}
                  </Typography>
                  {quickLinks.map((link) => (
                    <Box key={link.id} mb={2}>
                      <Link href={link.url}>
                        <Typography>{link.title}</Typography>
                      </Link>
                    </Box>
                  ))}
                </SOS>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <SOS>
                  <Typography variant="h6" color={"white"} mb={5}>
                    {dict.footer.policies_and_terms}
                  </Typography>
                  {policies.map((e) => (
                    <Box key={e.id} mb={2}>
                      <Link href={e.url}>
                        <Typography>{e.title}</Typography>
                      </Link>
                    </Box>
                  ))}
                </SOS>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <SOS>
                  <Typography variant="h6" color={"white"} mb={5}>
                    {dict.footer.have_a_question}
                  </Typography>
                  {contactInfo.map((e) => (
                    <Box key={e.id} display={"flex"} mb={2}>
                      <Box
                        color={"white"}
                        ml={lang === "ar" ? 2 : undefined}
                        mr={lang === "en" ? 2 : undefined}
                      >
                        {e.icon}
                      </Box>
                      <Typography>{e.description}</Typography>
                    </Box>
                  ))}
                </SOS>
              </Grid>
            </Grid>
            <Box borderTop={"2px solid white"} pt={5}>
              <Typography textAlign={"center"}>
                {dict.footer.copy_right}
              </Typography>
            </Box>
          </Box>
        </Container>
      </footer>
    </SOS>
  );
};

export default Footer;
