import comp from "/Users/lawrence/Development/1code/journie-profile-site/docs/.vuepress/.temp/pages/about_us/index.html.vue"
const data = JSON.parse("{\"path\":\"/about_us/\",\"title\":\"About Us\",\"lang\":\"English\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Contact us:\",\"slug\":\"contact-us\",\"link\":\"#contact-us\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"about_us/index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
