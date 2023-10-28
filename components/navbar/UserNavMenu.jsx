"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
// Icons
import PersonIcon from "@mui/icons-material/Person";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import GavelTwoToneIcon from "@mui/icons-material/GavelTwoTone";
import SecurityTwoToneIcon from "@mui/icons-material/SecurityTwoTone";
import AutorenewTwoToneIcon from "@mui/icons-material/AutorenewTwoTone";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
import Link from "next/link";

const UserNavMenu = ({ lang, dict }) => {
  // Handle opening and closing menu
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      !menuRef.current.contains(e.target) && setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <Box
      position={"relative"}
      display={"flex"}
      alignItems={"center"}
      sx={{ cursor: "pointer", "&:hover": { color: "white" } }}
      onClick={() => setOpen(!open)}
      ref={menuRef}
    >
      <Typography color={open && "white"} mx={1}>
        {lang === "ar" ? "الحساب" : "Account"}
      </Typography>
      <PersonIcon color={open ? "white" : undefined} />
      {open && (
        <Box
          position={"absolute"}
          top={50}
          right={lang === "en" ? 0 : undefined}
          left={lang === "ar" ? 0 : undefined}
          zIndex={10}
          width={"max-content"}
          p={2}
          border={"2px solid #51a29d"}
          borderRadius={2}
          bgcolor={"#010e28"}
          color={"#9fb3c8"}
          sx={{ cursor: "default" }}
        >
          <Link href={`/${lang}/user`}>
            <Box my={2} display={"flex"}>
              <GridViewTwoToneIcon />
              <Typography
                mr={lang === "ar" ? 1 : undefined}
                ml={lang === "en" ? 1 : undefined}
              >
                {dict.navbar.user_nav_menu.manage_account}
              </Typography>
            </Box>
          </Link>
          <Link href={`/${lang}/terms-and-conditions`}>
            <Box my={2} display={"flex"}>
              <GavelTwoToneIcon />
              <Typography
                mr={lang === "ar" ? 1 : undefined}
                ml={lang === "en" ? 1 : undefined}
              >
                {dict.navbar.user_nav_menu.terms_and_conditions}
              </Typography>
            </Box>
          </Link>
          <Link href={`/${lang}/privacy-policy`}>
            <Box my={2} display={"flex"}>
              <SecurityTwoToneIcon />
              <Typography
                mr={lang === "ar" ? 1 : undefined}
                ml={lang === "en" ? 1 : undefined}
              >
                {dict.navbar.user_nav_menu.privacy_policy}
              </Typography>
            </Box>
          </Link>
          <Link href={`/${lang}/exchange-and-return-policy`}>
            <Box my={2} display={"flex"}>
              <AutorenewTwoToneIcon />
              <Typography
                mr={lang === "ar" ? 1 : undefined}
                ml={lang === "en" ? 1 : undefined}
              >
                {dict.navbar.user_nav_menu.exchange_policy}
              </Typography>
            </Box>
          </Link>
          <Link href={"/"}>
            <Box my={2} display={"flex"}>
              <ExitToAppTwoToneIcon />
              <Typography
                mr={lang === "ar" ? 1 : undefined}
                ml={lang === "en" ? 1 : undefined}
              >
                {dict.navbar.user_nav_menu.sign_out}
              </Typography>
            </Box>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default UserNavMenu;
