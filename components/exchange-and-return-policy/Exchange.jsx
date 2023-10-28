import Section from "@/templates/Section";
import Title from "@/templates/Title";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Exchange = () => {
  const paragraphs = [
    "هذه خدمة إلكترونية، ولا يمكن استرداد قيمة الخدمة بأي شكل من الأشكال بعد تنزيل الخدمة.",
    "في حال وجود خطأ في الملف الإلكتروني أو لم يتمكن من تحميل الملف الإلكتروني، يمكن تقديم طلب استرداد الأموال عبر البريد الإلكتروني خلال 3 أيام من تاريخ الشراء.",
    "لدى العميل 3 أيام لاسترجاعها إذا لم يقم بتنزيل المستند الإلكتروني.",
    "يتم استرداد المبلغ إلى نفس الحساب البنكي الذي تم تسجيله فيه مسبقًا.",
    "بمجرد تنزيل المستند، لا يمكن استرجاعه.",
    "تستغرق إجراءات الإرجاع 21 يوم عمل من تاريخ طلب الإرجاع.",
    "جميع الحقوق محفوظة",
  ];
  return (
    <Section>
      <Container>
        <Box py={5} sx={{ direction: "rtl" }}>
          <Box display={"flex"} justifyContent={"center"} mb={5}>
            <Title>
              <Typography textAlign={"center"} variant="h3" color={"white"}>
                سياسة الاستبدال والإسترجاع
              </Typography>
            </Title>
          </Box>

          {paragraphs.map((p, index) => (
            <Box key={index}>
              <Typography mb={2}>{p}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  );
};

export default Exchange;
