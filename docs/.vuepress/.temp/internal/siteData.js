export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Journie\",\"description\":\"Journie is a fun and simple app, with the goal of helping you explore and discover nearby places while you travel.\",\"head\":[[\"meta\",{\"name\":\"keywords\",\"content\":\"Journie,travel,poi,places,explore,discover\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/images/logos/180.png\"}]],\"locales\":{\"/\":{\"lang\":\"English\",\"title\":\"Journie\",\"description\":\"Journie is a fun and simple app, with the goal of helping you explore and discover nearby places while you travel.\"},\"/zh/\":{\"lang\":\"中文\",\"title\":\"这里\",\"description\":\"这里 是一个有趣且简单的应用，旨在帮助您在旅行时探索和发现附近的地方。\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
