"use client";
import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import PublicIcon from "@mui/icons-material/Public";
import NavlinkWithMenu from "./NavlinkWithMenu";
import { usePathname } from "next/navigation";
import NavMenu from "./NavMenu";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPages } from "@/store/pagesSlice";
import urlsList from "@/public/data/urlsList.json";
import UserNavMenu from "./UserNavMenu";

const Navbar = ({ dict, lang }) => {
  const servicesPages = useSelector((state) => state.pages.pages);

  // Use router
  const pathname = usePathname();
  const dispatch = useDispatch();
  const url = urlsList.nav_elements;

  useEffect(() => {
    axios.get(url).then((res) => {
      dispatch(setPages(res.data));
    });
  }, []);

  // Handle language change
  const arUrl = pathname.replace("/en", "/ar");
  const enUrl = pathname.replace("/ar", "/en");

  return (
    <nav>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          height={75}
        >
          {/* Logo on large screen only*/}
          <Box display={{ xs: "none", sm: "none", md: "flex" }}>
            <Link href={`/${lang}`}>
              <img src={"/images/logo.png"} alt="Logo" width={50} height={50} />
            </Link>
          </Box>

          {/* Pages on large screen only */}

          <Box display={{ xs: "none", sm: "none", md: "flex" }}>
            <Box mx={2}>
              <Link href={`/${lang}`}>
                <Typography>{dict.navbar.home}</Typography>
              </Link>
            </Box>
            <Box mx={2}>
              <Link href={`/${lang}/about-us`}>
                <Typography>{dict.navbar.about_us}</Typography>
              </Link>
            </Box>
            {servicesPages.map((page) => (
              <Box
                key={page.id}
                mx={2}
                className={path === page.slug ? "active-navlink" : undefined}
              >
                <NavlinkWithMenu title={page.title_ar} subPages={page.pages} />
              </Box>
            ))}
            <Box mx={2}>
              <Link href={`/${lang}/contact-us`}>
                <Typography>{dict.navbar.contact_us}</Typography>
              </Link>
            </Box>
          </Box>

          {/* Nav menu button on small screen only */}
          <Box display={{ xs: "block", sm: "block", md: "none" }}>
            <NavMenu pages={servicesPages} dict={dict} lang={lang} />
          </Box>

          {/* Logo on small screen only*/}
          <Box display={{ xs: "flex", sm: "flex", md: "none" }}>
            <Link href={`/${lang}`}>
              <img src={"/images/logo.png"} alt="Logo" width={50} height={50} />
            </Link>
          </Box>

          {/* Language and Account */}
          <Box display={"flex"}>
            <UserNavMenu lang={lang} dict={dict} />
            <Link href={lang === "ar" ? enUrl : arUrl}>
              <Box
                display={"flex"}
                alignItems={"center"}
                sx={{ cursor: "pointer" }}
              >
                <Typography mx={1}>
                  {lang === "ar" ? "EN" : "العربية"}
                </Typography>
                <PublicIcon />
              </Box>
            </Link>
          </Box>
        </Box>
      </Container>
    </nav>
  );
};

export default Navbar;
