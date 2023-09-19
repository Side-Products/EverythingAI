// export const pageview = (url) => {
// 	window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, { path_url: url });
// };

export const pageview = (url) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
