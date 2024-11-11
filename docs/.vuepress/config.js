import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";

export default defineUserConfig({
  lang: "en-US",

  title: "Journie",
  description:
    "Journie is a fun and simple app, with the goal of helping you explore and discover nearby places while you travel.",

  head: [
    [
      "meta",
      {
        name: "keywords",
        content: "Journie,travel,poi,places,explore,discover",
      },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "icon", href: "/images/logos/180.png" }],
  ],

  base: "/",

  locales: {
    "/": {
      lang: "English",
      title: "Journie",
      description:
        "Journie is a fun and simple app, with the goal of helping you explore and discover nearby places while you travel.",
    },
    "/zh/": {
      lang: "中文",
      title: "这里",
      description:
        "这里 是一个有趣且简单的应用，旨在帮助您在旅行时探索和发现附近的地方。",
    },
  },

  theme: defaultTheme({
    logo: "/images/logos/180.png",
    sidebar: "false",
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        navbar: [
          { text: "Privacy", link: "/privacy/" },
          { text: "About Us", link: "/about_us/" },
        ],
      },
      "/zh/": {
        selectText: "选择语言",
        label: "简体中文",
        navbar: [
          { text: "用户协议", link: "/zh/privacy/" },
          { text: "关于我们", link: "/zh/about_us/" },
        ],
      },
    },
  }),

  bundler: viteBundler(),
});
