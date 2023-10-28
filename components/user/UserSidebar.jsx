import Section from "@/templates/Section";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const UserSidebar = ({ dict, lang }) => {
  return (
    <aside>
      <Box py={5}>
        <Box bgcolor={"#0c1933"} borderRadius={5} overflow={"hidden"}>
          <Box pb={3} pt={7}>
            <Container>
              {dict.user.sidebar.map((e) => (
                <Box mb={5} key={e.id}>
                  <Typography variant={"h5"} color="white" mb={3}>
                    {e.title}
                  </Typography>
                  {e.elements.map((e) => (
                    <Link href={e.url} key={e.id}>
                      <Typography mb={2}>{e.title}</Typography>
                    </Link>
                  ))}
                </Box>
              ))}
            </Container>
          </Box>
        </Box>
      </Box>
    </aside>
  );
};

export default UserSidebar;
