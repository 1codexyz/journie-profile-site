export const themeData = JSON.parse("{\"logo\":\"/images/logos/180.png\",\"sidebar\":\"false\",\"locales\":{\"/\":{\"selectText\":\"Languages\",\"label\":\"English\",\"navbar\":[{\"text\":\"Privacy\",\"link\":\"/privacy/\"},{\"text\":\"About Us\",\"link\":\"/about_us/\"}],\"selectLanguageName\":\"English\"},\"/zh/\":{\"selectText\":\"选择语言\",\"label\":\"简体中文\",\"navbar\":[{\"text\":\"用户协议\",\"link\":\"/zh/privacy/\"},{\"text\":\"关于我们\",\"link\":\"/zh/about_us/\"}]}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
