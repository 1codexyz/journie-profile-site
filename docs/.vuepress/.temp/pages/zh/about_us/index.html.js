import comp from "/Users/lawrence/Development/1code/journie-profile-site/docs/.vuepress/.temp/pages/zh/about_us/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/about_us/\",\"title\":\"关于我们\",\"lang\":\"中文\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"联系我们\",\"slug\":\"联系我们\",\"link\":\"#联系我们\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"zh/about_us/index.md\"}")
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
