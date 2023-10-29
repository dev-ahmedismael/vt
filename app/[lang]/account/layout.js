import { Inter } from "next/font/google";
// import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Nunito } from "next/font/google";
import Footer from "@/components/footer/Footer";
import ReduxProvider from "@/store/ReduxProvider";
import { getDictionary } from "../dictionaries";
import { Box, Container, Grid } from "@mui/material";
import UserSidebar from "@/components/user/UserSidebar";

const inter = Inter({ subsets: ["latin"] });

export default async function UserLayout({ children, params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={3}>
          <UserSidebar dict={dict} lang={lang} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box py={5}>
            <Box bgcolor={"#0c1933"} borderRadius={5} overflow={"hidden"}>
              <Box py={5}>
                <Container>{children}</Container>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
