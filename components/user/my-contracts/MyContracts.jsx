import { Box, Typography } from "@mui/material";
import React from "react";

const MyContracts = ({dict, lang}) => {
  return (
    <Box>
      <Typography variant="h5" mb={5} color={"white"}>
        {dict.user.my_contracts.title}
      </Typography>
      <Typography textAlign={"center"}>
        {lang === "en"
          ? "You don't have contracts yet."
          : "ليس لديك عقود مسجلة حاليا."}
      </Typography>
    </Box>
  );
};

export default MyContracts;
