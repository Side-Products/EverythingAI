const product_url = "https://everythingai.club";

module.exports = {
  siteUrl: product_url,
  generateRobotsTxt: true,
  exclude: ["/admin/*", "/404"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/admin/*" },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${product_url}/sitemap.xml`,
      `${product_url}/sitemap-0.xml`,
      `${product_url}/server-sitemap.xml`,
    ],
  },
};
