import Title from "@/templates/Title";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = ({ dict, lang }) => {
  return (
    <Container>
      <header>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Title>
              <Typography variant="h2" color={"white"}>
                {dict.contact_us.title}
              </Typography>
            </Title>

            <Typography variant="h2" color={"#51a29d"}>
              {dict.contact_us.description}
            </Typography>
          </Box>
          <Box display={{ xs: "none", sm: "block" }}>
            <img
              src="/images/contact.png"
              alt="Contact us"
              width={"100%"}
              className={lang === "ar" ? "reverse-img" : undefined}
            />
          </Box>
        </Box>
      </header>
      <ContactForm dict={dict} lang={lang} />
    </Container>
  );
};

export default ContactUs;
