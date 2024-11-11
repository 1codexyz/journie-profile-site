export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lawrence/Development/1code/journie-profile-site/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Journie - Explore and discover"} }],
  ["/about_us/", { loader: () => import(/* webpackChunkName: "about_us_index.html" */"/Users/lawrence/Development/1code/journie-profile-site/docs/.vuepress/.temp/pages/about_us/index.html.js"), meta: {"title":"About Us"} }],
  ["/privacy/", { loader: () => import(/* webpackChunkName: "privacy_index.html" */"/Users/lawrence/Development/1code/journie-profile-site/docs/.vuepress/.temp/pages/privacy/index.html.js"), meta: {"title":"Journie App Privacy Policy"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"/Users/lawrence/Development/1code/journie-profile-site/docs/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":"这里 - 探索和发现"} }],
  ["/zh/about_us/", { loader: () => import(/* webpackChunkName: "zh_about_us_index.html" */"/Users/lawrence/Development/1code/journie-profile-site/docs/.vuepress/.temp/pages/zh/about_us/index.html.js"), meta: {"title":"关于我们"} }],
  ["/zh/privacy/", { loader: () => import(/* webpackChunkName: "zh_privacy_index.html" */"/Users/lawrence/Development/1code/journie-profile-site/docs/.vuepress/.temp/pages/zh/privacy/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/lawrence/Development/1code/journie-profile-site/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
