import { createSlice } from "@reduxjs/toolkit";

const LangugeSlice = createSlice({
  name: "lang",
  initialState: {
    type: "english",
    navbar: {
      langName: ["English", "کوردی", "عربي"],
      theme: { on: "Night", off: "Day" },
      link: {
        name: ["home", "about", "skills", "project", "contact"],
        to: ["/", "about", "skill", "project", "contact"],
      },
    },
    home: {
      welcome: "welcome",
      mayName: "i'm yahya hiwa",
      introduc:
        "I'm a working software developer in building Windows applications , designing and normalizing database systems , and am a web developer",
    },
    about: {
      about:
        "mn yahya yam hazm la programinga hazm la dizayny jwana halbzhardny range jwan mn grngy zor ayam" +
        "mn grngy zor ayam ba quality w feature y barhamakanm mn companyayaky start-up m haya ba nawy kazh group",
    },
    project: {
      name: [
        "weight staion application for govermnet",
        "weight staion application for privite weight station",
      ],
      detial: [
        "I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend. lo",
      ],
      btnName: "order",
    },
  },
  reducers: {
    english: (state) => {
      (state.type = "english"),
        (state.navbar = {
          langName: ["English", "کوردی", "عربي"],
          theme: { on: "Night", off: "Day" },
          link: {
            name: ["home", "about", "skills", "project", "contact"],
            to: ["/", "about", "skill", "project", "contact"],
          },
        }),
        (state.home = {
          welcome: "welcome ,",
          mayName: "i'm yahya hiwa",
          introduc:
            "I'm a working software developer in building Windows applications , designing and normalizing database systems , and am a web developer",
        }),
        (state.about = {
          about:
            "mn yahya yam hazm la programinga hazm la dizayny jwana halbzhardny range jwan mn grngy zor ayam" +
            "mn grngy zor ayam ba quality w feature y barhamakanm mn companyayaky start-up m haya ba nawy kazh group",
        }),
        (state.project = {
          name: [
            "weight staion application for govermnet",
            "weight staion application for privite weight station",
          ],
          detial: [
            "I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend. lo",
          ],
          btnName: "order",
        });
    },
    kurdish: (state) => {
      (state.type = "kurdish"),
        (state.navbar = {
          langName: ["English", "کوردی", "عربي"],
          theme: { on: "شەو", off: "ڕۆژ" },
          link: {
            name: ["هۆم", "دەربارە", "ئەزموون", "پرۆژەکان", "پەیوەندی"],
            to: ["/", "about", "skill", "project", "contact"],
          },
        }),
        (state.home = {
          welcome: "، بەخێربێیت",
          mayName: "من یەحیا هیوام",
          introduc:
            "  من گەشەپێدەرێکی نەرمەکاڵاکانم ،کار لە دروستکردنی بەرنامەی ویندۆز ، دیزاینکردن و نۆرمال کردنی داتابەیس ، گەشەپێدانی وێبسایت دەکەم ",
        }),
        (state.about = {
          about:
            "من ،یەحیا هیوام hazm la programinga hazm la dizayny jwana halbzhardny range jwan mn grngy zor ayam" +
            "mn grngy zor ayam ba quality w feature y barhamakanm mn companyayaky start-up m haya ba nawy kazh group",
        }),
        (state.project = {
          name: [
            "من ،یەحیا هیوام application for govermnet",
            "weight staion application for privite weight station",
          ],
          detial: [
            "Iمن ،یەحیا هیوام  the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend. lo",
          ],
          btnName: "داواکردن",
        });
    },
    arabic: (state) => {
      (state.type = "arabic"),
        (state.navbar = {
          langName: ["English", "کوردی", "عربي"],
          theme: { on: "لیل", off: "نهار" },
          link: {
            name: ["الصفحة الرئيسية", "حول", "المهارات", "المشروع", "الاتصال"],
            to: ["/", "about", "skill", "project", "contact"],
          },
        }),
        (state.home = {
          welcome: "، مرحباً",
          mayName: "أنا يحيى هيوا",
          introduc:
            "أنا مطور برمجيات عامل في بناء تطبيقات ویندوز وتصميم أنظمة قواعد البيانات وتطبيعها ، وأنا مطور ويب",
        }),
        (state.about = {
          about:
            "من ،یەحیا هیوام hazm la programinga hazm la dizayny jwana halbzhardny range jwan mn grngy zor ayam" +
            "mn grngy zor ayam ba quality w feature y barhamakanm mn companyayaky start-up m haya ba nawy kazh group",
        }),
        (state.project = {
          name: [
            "من ،یەحیا هیوام application for govermnet",
            "weight staion application for privite weight station",
          ],
          detial: [
            "Iمن ،یەحیا هیوام  the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend. lo",
          ],
          btnName: "طلب",
        });
    },
  },
});

export const { english, kurdish, arabic } = LangugeSlice.actions;
export default LangugeSlice.reducer;
