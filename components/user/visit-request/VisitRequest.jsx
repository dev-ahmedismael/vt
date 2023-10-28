import SecBtn from "@/templates/SecBtn";
import { Box, Typography } from "@mui/material";
import React from "react";

const VisitRequest = ({ dict, lang }) => {
  return (
    <Box>
      <Typography variant="h5" mb={2} color={"white"}>
        {dict.user.visit_request.title}
      </Typography>
      <Typography mb={5}>{dict.user.visit_request.description}</Typography>
      <SecBtn>{dict.user.visit_request.button}</SecBtn>
    </Box>
  );
};

export default VisitRequest;
