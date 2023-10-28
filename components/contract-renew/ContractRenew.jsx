"use client";
import Section from "@/templates/Section";
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import urlsList from "@/public/data/urlsList.json";
import axios from "axios";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  savePersonalInformation,
  saveProductDetails,
} from "@/store/contractSlice";
import Link from "next/link";

const validationSchema = yup.object({
  contract_number: yup
    .string()
    .required("من فضلك ادخل رقم العقد")
    .matches(/^[0-9]+$/, "ادخل رقم عقد صالح"),
});

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

const ContractRenew = () => {
  // Handle modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const searchUrl = urlsList.search_contract;
  const [errMsg, setErrMsg] = useState(null);
  const [responseMsg, setResponseMsg] = useState(null);
  const dispatch = useDispatch();

  const search = (formData) => {
    axios.get(`${searchUrl}/${formData.contract_number}`).then((res) => {
      if (res.data.length === 0) {
        setErrMsg(
          "لم نتمكن من الحصول على العقد، يرجى التحقق من البيانات وإعادة المحاولة"
        );
      } else {
        setErrMsg(null);
        setResponseMsg(`تم العثور على عقد باسم السيد/ ${res.data[0].name}`);
        const personalInformation = {
          name: res.data[0].name,
          phone: res.data[0].phone,
          email: res.data[0].email,
          company_type: res.data[0].company_type,
          commercial_number: res.data[0].commercial_number,
          tax_number: res.data[0].tax_number,
          address: res.data[0].address,
          city: res.data[0].city,
          building_number: res.data[0].building_number,
          street_name: res.data[0].street_name,
          second_number: res.data[0].second_number,
          district: res.data[0].district,
          zip_code: res.data[0].zip_code,
        };
        const productDetails = {
          indoor_cameras: res.data[0].indoor_cameras,
          outdoor_cameras: res.data[0].outdoor_cameras,
          storage_device: res.data[0].storage_device,
          period_of_record: res.data[0].period_of_record,
          show_screens: res.data[0].show_screens,
          camera_type: res.data[0].camera_type,
        };

        dispatch(savePersonalInformation(personalInformation));
        dispatch(saveProductDetails(productDetails));

        handleOpen();
      }
    });
  };
  //  Form validation

  const formik = useFormik({
    initialValues: {
      contract_number: "",
    },
    validationSchema: validationSchema,
    onSubmit: (formData) => {
      search(formData);
    },
  });
  return (
    <Section>
      <Container>
        <Box py={5} sx={{ direction: "rtl" }}>
          <Typography textAlign={"center"} variant="h4" mb={5}>
            تجديد عقد كاميرات
          </Typography>
          <Box id="contract-renew" className="ar-form">
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={10}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      name="contract_number"
                      variant="standard"
                      label="ابحث برقم العقد"
                      sx={{
                        borderBottom: "1px solid aqua",
                        borderRadius: "4px",
                      }}
                      value={formik.values.contract_number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.contract_number &&
                      Boolean(formik.errors.contract_number) && (
                        <Typography color={"error"}>
                          {formik.errors.contract_number}
                        </Typography>
                      )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
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
                        width: "100%",
                        borderRadius: 2,
                        px: 5,
                        borderColor: "#21C8F6",
                        color: "white",
                      }}
                    >
                      بحث
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>

          {errMsg !== null && (
            <Box pt={5}>
              <Alert severity={"error"}>{errMsg}</Alert>
            </Box>
          )}
        </Box>
        {/* Modal */}
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
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, direction: "rtl" }}
              >
                {responseMsg}
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                pt={3}
              >
                <Link href={"/ar/contract/personal-information"}>
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
                  >
                    استمرار
                  </Button>
                </Link>
              </Box>
            </Container>
          </Box>
        </Modal>
      </Container>
    </Section>
  );
};

export default ContractRenew;
