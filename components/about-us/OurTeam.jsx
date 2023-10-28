import SOS from "@/templates/SOS";
import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const OurTeam = () => {
  const team = [
    {
      id: 1,
      title: "م. هتان عاشور",
      job: "رئيس مجلس الإدارة ومؤسس شركة رؤية الأشياء",
      description:
        "رئيس مجلس الإدارة ومؤسس شركة رؤية الأشياء ويتمتع بخبرة واسعة في مجالات الشبكات وتكنولوجيا المعلومات.",
      imgUrl: "/images/team/eng_hattan.png",
      boxColor: "linear-gradient(to bottom,#8B60ED,#B372BD)",
    },
    {
      id: 2,
      title: "م. علي فتحي",
      job: "نائب رئيس مجلس الإدارة ومهندس الشبكات",
      description: "مهندس نظم وتقنية المعلومات ونائب رئيس مجلس الإدارة.",
      boxColor: "linear-gradient(to bottom,#6EDCC4,#1AAB8B)",
    },
    {
      id: 3,
      title: "م. عاصم أسامة",
      job: "مطور واجهات أمامية ومصمم لواجهة وتجربة المستخدم",
      description:
        "يعمل في مجال التصميم وتحديد متطلبات العملاء وتصميم وبرمجة الواجهات الخارجية.",
      imgUrl: "/images/team/eng_assem.png",
      boxColor: "linear-gradient(to bottom,#DB678D,#EC454F)",
    },
    {
      id: 4,
      title: "م. سمير علاء",
      job: "مطور الواجهة الخلفية",
      description:
        "يعمل في البرمجة الهيكلية للمواقع الإلكترونية وبرمجة الوظائف الداخلية للبرنامج.",
      boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
    },
    {
      id: 5,
      title: "م. أحمد إسماعيل",
      job: "مطور واجهة أمامية",
      description:
        "مسؤول عن تطوير الميزات الجديدة التي تواجه المستخدم، وتحديد هيكل وتصميم صفحات الويب.",
      imgUrl: "/images/team/eng_ahmed.png",
      boxColor:
        "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    },
  ];
  return (
    <SOS>
      <section className="section-with-cards">
        <Container>
          <Box sx={{ direction: "rtl" }}>
            <Box display={"flex"} justifyContent={"center"} pt={10} mb={10}>
              <Title>
                <Typography variant="h3" textAlign={"center"} color={"white"}>
                  فريقنا
                </Typography>
              </Title>
            </Box>

            <Grid container spacing={5} justifyContent={"center"}>
              {team.map((member) => (
                <Grid key={member.id} item xs={12} sm={6}>
                  <SOS>
                    <Box
                      bgcolor={"#0c1933"}
                      borderRadius={5}
                      p={3}
                      sx={{
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: "0.3s all",
                        },
                      }}
                      className="centered-section"
                    >
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={5}>
                          <Box
                            sx={{ background: member.boxColor }}
                            borderRadius={5}
                            height={200}
                            overflow={"hidden"}
                          >
                            {member.imgUrl && (
                              <img
                                src={member.imgUrl}
                                alt={member.title}
                                width={"100%"}
                                height={200}
                              />
                            )}
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                          <Box>
                            <Typography color="white" variant="h5">
                              {member.title}
                            </Typography>
                            <Typography color="#197771" variant="h6" mb={3}>
                              {member.job}
                            </Typography>
                            <Typography>{member.description}</Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </SOS>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </section>
    </SOS>
  );
};

export default OurTeam;
