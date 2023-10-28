import SecBtn from "@/templates/SecBtn";
import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const ChangeEmail = ({ dict, lang }) => {
  return (
    <Box>
      <Typography variant="h5" mb={5} color={"white"}>
        {dict.user.change_email.title}
      </Typography>
      <form className={lang === "ar" ? "ar-form" : undefined}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              fullWidth
              label={dict.user.change_email.new_email}
              sx={{
                borderBottom: "1px solid lightblue",
                color: "white",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="password"
              variant="standard"
              fullWidth
              label={dict.user.change_email.password}
              sx={{
                borderBottom: "1px solid lightblue",
                color: "white",
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <SecBtn>{dict.user.change_email.button}</SecBtn>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ChangeEmail;
