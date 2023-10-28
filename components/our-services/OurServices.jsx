import SectionWithCards from "@/templates/SectionWithCards";
import { Box } from "@mui/material";
import React from "react";

const OurServices = () => {
  const section = {
    description:
      "تقدم شركة فيجن أشياء العديد من الخدمات الفنية والمعلوماتية والشبكات وغيرها من الخدمات التي يمكنك الاطلاع عليها ومعرفة المزيد عنها. ويمكنك التعرف على معلومات إضافية عن كل خدمة تقدمها شركة فيجن أشياء أيضًا.",
    cards: [
      {
        id: 1,
        title: "الذكاء الاصطناعي AI ",
        description:
          "الذكاء الاصطناعي هو محاكاة عمليات الذكاء البشري بواسطة الآلات أو أنظمة الكمبيوتر.",
        boxColor: "linear-gradient(to bottom,#8B60ED,#B372BD)",
        url: "/ar/ai",
      },
      {
        id: 2,
        title: "رؤية الكمبيوتر CR",
        description:
          "رؤية الكمبيوتر هي مجال من مجالات الذكاء الاصطناعي (AI) الذي يمكّن أجهزة الكمبيوتر والأنظمة من استخلاص معلومات ذات معنى من الصور الرقمية ومقاطع الفيديو والمدخلات المرئية الأخرى - واتخاذ الإجراءات أو تقديم التوصيات بناءً على تلك المعلومات.",
        boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
        url: "/ar/cr",
      },
      {
        id: 3,
        title: "الروبوتات",
        description:
          "الروبوت هو نوع من الآلات الآلية التي يمكنها تنفيذ مهام محددة بتدخل بشري قليل أو معدوم.",
        boxColor: "linear-gradient(to bottom,#6EDCC4,#1AAB8B)",
        url: "/ar/robots",
      },
      {
        id: 4,
        title: "الواقع المعزز AR",
        description:
          "الواقع المعزز هو نسخة تفاعلية محسنة من بيئة العالم الحقيقي يتم تحقيقها من خلال العناصر المرئية الرقمية والأصوات والمحفزات الحسية الأخرى عبر التكنولوجيا الثلاثية الأبعاد.",
        boxColor: "linear-gradient(to bottom,#F19A1A,#FFC73C)",
        url: "/ar/ar",
      },
      {
        id: 5,
        title: "إنترنت الأشياء IOT",
        description:
          "شبكة الأشياء المادية - الأشياء - المضمنة بأجهزة الاستشعار والبرامج والتقنيات الأخرى بغرض توصيل البيانات وتبادلها مع الأجهزة والأنظمة الأخرى عبر الإنترنت.",
        boxColor: "linear-gradient(to bottom,#DB678D,#EC454F)",
        url: "/ar/iot",
      },
      {
        id: 6,
        title: "التكنولوجيا وإدارة المعلومات ",
        description:
          "توفر Vision of Things خدمات إدارة تكنولوجيا المعلومات نيابة عن الآخرين بكفاءة وأمان.",
        boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
        url: "/ar/technology-and-information-management",
      },
      {
        id: 7,
        title: "تمديد وصيانة الشبكة ",
        description:
          "تصميم امتداد الشبكة هو عملية تخطيط وتنفيذ نظام شبكة جديد أو محدث. يتضمن ذلك تحديد احتياجات العمل واختيار المعدات المناسبة وتثبيت النظام. ",
        boxColor: "linear-gradient(to bottom,#8B60ED,#B372BD)",
        url: "/ar/network-extension-and-maintenance",
      },
      {
        id: 8,
        title: "إدارة مركز الاتصال ",
        description:
          "(CCaaS) هي خدمة سحابية توفر مجموعة من أدوات التحكم والإدارة لمراكز الاتصال. يمكن أن تتضمن هذه الأدوات الرد الآلي على المكالمات، والتوجيه الذكي للمكالمات، والتحليلات، وإدارة الموظفين.",
        boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
        url: "/ar/call-center-management",
      },
      {
        id: 9,
        title: "صيانة معدات تكنولوجيا المعلومات",
        description:
          "تعد أجهزة تكنولوجيا المعلومات من أهم الأصول التي تمتلكها الشركات، حيث أنها تمكن الموظفين من الوصول إلى المعلومات والتطبيقات التي يحتاجونها لإنجاز أعمالهم.",
        boxColor: "linear-gradient(to bottom,#6EDCC4,#1AAB8B)",
        url: "/ar/it-equipment-maintenance",
      },
      {
        id: 10,
        title: "صيانة نظام تكنولوجيا المعلومات ",
        description:
          "صيانة نظام تكنولوجيا المعلومات هي عملية الحفاظ على أنظمة تكنولوجيا المعلومات في حالة عمل جيدة.",
        boxColor: "linear-gradient(to bottom,#F19A1A,#FFC73C)",
        url: "/ar/it-system-maintenance",
      },
      {
        id: 11,
        title: "توريد وتركيب الأجهزة الفنية",
        description:
          "يعد توريد وتركيب وتشغيل المعدات التقنية جزءًا مهمًا من أي عمل تجاري. تعتمد الشركات على المعدات التقنية لتشغيل عملياتها اليومية. ",
        boxColor: "linear-gradient(to bottom,#DB678D,#EC454F)",
        url: "/ar/supply-and-installing-technical-devices",
      },
      {
        id: 12,
        title: "خدمات ربط موقع VPN ",
        description:
          "نحن نقدم أحدث موصلات الويب من خلال ربط جميع المواقع والفروع بشبكة واحدة آمنة.",
        boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
        url: "/ar/vpn-site-linkage-services",
      },
      {
        id: 13,
        title: "خدمات النسخ الاحتياطي",
        description:
          "إيمانًا منا بأهمية معلومات عملائنا، فإننا نقدم لهم خدمة النسخ الآمنة سواء داخل شبكتهم المحلية أو الشبكة السحابية.",
        boxColor: "linear-gradient(to bottom,#8B60ED,#B372BD)",
        url: "/ar/backup-services",
      },
      {
        id: 14,
        title: "مراكز الاتصالات ",
        description:
          "نقوم بتركيب وتمديد وتهيئة أجهزة هاتف الشبكة للتواصل مع أعضاء الشبكة أو الشركة أو الفروع داخل الشبكة نفسها عبر هاتف الشبكة، بالإضافة إلى خدمة تقوم المنشآت من خلالها باستقبال مكالمات العملاء من خارج الشبكة عبر الهاتف أو الجوال عبر مراكز الاتصال.",
        boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
        url: "/ar/communication-centers",
      },
      {
        id: 15,
        title: "الكاميرات وخدمات المنزل الذكي ",
        description:
          "إنشاء وتصميم وربط شبكات الكاميرات والمنازل الذكية وأجهزة التحكم عن بعد.",
        boxColor: "linear-gradient(to bottom,#6EDCC4,#1AAB8B)",
        url: "/ar/cameras-and-smart-home-services",
      },
      {
        id: 16,
        title: "مصدقه للتوقيع الالكتروني",
        description:
          "هي منصة إلكترونية تساعد الأفراد والشركات على إصدار الخطابات والعقود وإضافة هوياتهم وأختامهم وتواقيعهم إليها بسهولة ويسر.",
        boxColor: "linear-gradient(to bottom,#F19A1A,#FFC73C)",
        url: "/ar/musadiqa-for-online-signature",
      },
    ],
    hasBtn: false,
    section: "our-services",
  };
  return (
    <Box sx={{ direction: "rtl" }}>
      <SectionWithCards
        description={section.description}
        cards={section.cards}
        hasBtn={section.hasBtn}
        section={section.section}
      />
    </Box>
  );
};

export default OurServices;
