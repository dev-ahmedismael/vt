import { Box, Typography } from "@mui/material";
import React from "react";

const RenewContract = ({ dict, lang }) => {
  return (
    <Box>
      <Typography variant="h5" mb={5} color={"white"}>
        {dict.user.renew_contract.title}
      </Typography>
      <Typography textAlign={"center"}>
        {lang === "en"
          ? "You don't have contracts yet."
          : "ليس لديك عقود مسجلة حاليا."}
      </Typography>
    </Box>
  );
};

export default RenewContract;
