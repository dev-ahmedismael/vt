"use client";
import Section from "@/templates/Section";
import Title from "@/templates/Title";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import {
  Box,
  Grid,
  FormControl,
  Button,
  Typography,
  Container,
  Skeleton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import urlsList from "@/public/data/urlsList.json";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import * as yup from "yup";
import SOS from "@/templates/SOS";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#010e28",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactForm = ({ dict, lang }) => {
  const validationSchema = yup.object({
    name: yup
      .string()
      .min(2, lang === "ar" ? "الاسم قصير جدا" : "Too short")
      .max(50, lang === "ar" ? "الاسم طويل جدا" : "Too long")
      .required(lang === "ar" ? "الاسم مطلوب" : "Name is required"),
    phone: yup
      .string()
      .matches(
        phoneRegExp,
        lang === "ar" ? "رقم الجوال غير صالح" : "Cell number is not valid"
      )
      .required(
        lang === "ar" ? "رقم الجوال مطلوب " : "Cell number is required"
      ),
    email: yup
      .string(lang === "ar" ? "ادخل بريدك الالكتروني" : "Enter your email")
      .email(lang === "ar" ? "البريد غير صالح" : "Email is not valid")
      .required(
        lang === "ar" ? "البريد الالكتروني مطلوب" : "Email is required"
      ),
    subject: yup
      .string()
      .required(lang === "ar" ? "هذا الحقل مطلوب" : "This field is required"),
    message: yup
      .string()
      .required(lang === "ar" ? "هذا الحقل مطلوب" : "This field is required"),
  });
  // Handle modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Send a message
  const url = urlsList.contact_messages;
  const [responseMsg, setResponseMsg] = useState(null);
  const sendMail = (formData) => {
    // event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    const data = formData;
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setResponseMsg(
          lang === "ar"
            ? "لقد تم الارسال بنجاح، شكرا لاتصالك بنا."
            : "Your message has been sent successfully, Thanks for contacting us. "
        );
      })
      .catch((error) =>
        setResponseMsg(
          lang === "ar"
            ? "لقد تعذر الارسال، يرجى المحاولة فى وقت لاحق."
            : "Failed to send message, please try again later."
        )
      );
  };

  // Contact form validation

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (formData) => {
      sendMail(formData);
      handleOpen();
    },
  });
  return (
    <Section>
      <Container>
        <SOS>
          <Box py={5}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={5}>
                <Title>
                  <Typography variant="h4" color={"white"} mb={5}>
                    {dict.contact_us.form.title}
                  </Typography>
                </Title>
                <Typography variant={"h6"} mb={3}>
                  {dict.contact_us.form.description}
                </Typography>
                <Box display={"flex"} mb={2}>
                  <MyLocationIcon />
                  <Typography variant="h6" ml={2}>
                    {dict.contact_us.form.address}
                  </Typography>
                </Box>
                <Box display={"flex"}>
                  <PhoneEnabledIcon />
                  <Typography variant="h6" ml={2}>
                    {dict.contact_us.form.cell}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={7}>
                <form
                  onSubmit={formik.handleSubmit}
                  className={lang === "ar" ? "ar-form" : undefined}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <FormControl fullWidth>
                        <TextField
                          sx={{
                            borderBottom: "1px solid lightblue",
                            color: "white",
                          }}
                          type="text"
                          variant="standard"
                          name="name"
                          label={dict.contact_us.form.form_fields.name}
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && Boolean(formik.errors.name) && (
                          <Typography color={"error"}>
                            {formik.errors.name}
                          </Typography>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <FormControl fullWidth>
                        <TextField
                          sx={{ borderBottom: "1px solid lightblue" }}
                          variant="standard"
                          type="text"
                          name="phone"
                          label={dict.contact_us.form.form_fields.phone}
                          value={formik.values.last_name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.phone &&
                          Boolean(formik.errors.phone) && (
                            <Typography color={"error"}>
                              {formik.errors.phone}
                            </Typography>
                          )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <FormControl fullWidth>
                        <TextField
                          sx={{ borderBottom: "1px solid lightblue" }}
                          variant="standard"
                          type="text"
                          label={dict.contact_us.form.form_fields.email}
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.email &&
                          Boolean(formik.errors.email) && (
                            <Typography color={"error"}>
                              {formik.errors.email}
                            </Typography>
                          )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <FormControl fullWidth>
                        <TextField
                          sx={{ borderBottom: "1px solid lightblue" }}
                          variant="standard"
                          type="text"
                          label={dict.contact_us.form.form_fields.subject}
                          name="subject"
                          value={formik.values.subject}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.subject &&
                          Boolean(formik.errors.subject) && (
                            <Typography color={"error"}>
                              {formik.errors.subject}
                            </Typography>
                          )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <FormControl fullWidth>
                        <TextField
                          sx={{
                            borderBottom: "1px solid lightblue",
                            borderRadius: 1,
                          }}
                          variant="standard"
                          multiline
                          minRows={5}
                          label={dict.contact_us.form.form_fields.message}
                          name="message"
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.message &&
                          Boolean(formik.errors.message) && (
                            <Typography color={"error"}>
                              {formik.errors.message}
                            </Typography>
                          )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Box display={"flex"} justifyContent={"center"}>
                        <Button
                          type="submit"
                          variant="outlined"
                          sx={{
                            "&:hover": {
                              backgroundImage:
                                "linear-gradient(to right,#21C8F6,#637BFF)",
                              border: "none",
                            },
                            height: 60,
                            borderRadius: 2,
                            px: 5,
                            borderColor: "#21C8F6",
                            color: "white",
                          }}
                        >
                          {dict.contact_us.form.form_fields.button}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Box>
        </SOS>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>
            {responseMsg === null && (
              <Box id="modal-modal-description" sx={{ mt: 2 }}>
                <Skeleton variant="rounded" width={"100%"} height={40} />
              </Box>
            )}
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {responseMsg}
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
              pt={3}
            >
              <Button
                variant="outlined"
                sx={{
                  "&:hover": {
                    backgroundImage:
                      "linear-gradient(to right,#21C8F6,#637BFF)",
                    border: "none",
                  },
                  height: 60,
                  borderRadius: 2,
                  px: 5,
                  borderColor: "#21C8F6",
                  color: "white",
                }}
                onClick={handleClose}
              >
                {lang === "ar" ? "اغلاق" : "Close"}
              </Button>
            </Box>
          </Container>
        </Box>
      </Modal>
    </Section>
  );
};

export default ContactForm;
