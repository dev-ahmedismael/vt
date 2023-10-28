"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";

const NavlinkWithMenu = ({ title, subPages }) => {
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
      sx={{ cursor: "pointer", "&:hover": { color: "white" } }}
      onClick={() => setOpen(!open)}
      ref={menuRef}
    >
      <Typography color={open && "white"}>{title}</Typography>
      <ArrowDropDownIcon sx={{ color: open && "white" }} />
      {open && (
        <Box
          position={"absolute"}
          top={50}
          left={0}
          zIndex={10}
          width={"max-content"}
          pt={2}
          px={2}
          border={"2px solid #51a29d"}
          borderRadius={2}
          bgcolor={"#010e28"}
        >
          {subPages.map((subPage) => (
            <Box key={subPage.id} mb={2} className="subPage">
              <Link href={`/ar/services/${subPage.slug}`}>
                <Typography
                  sx={{
                    "&:hover": { color: "#51a29d", transition: "0.2s all" },
                  }}
                >
                  {subPage.title_ar}
                </Typography>
              </Link>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NavlinkWithMenu;
