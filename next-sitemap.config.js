const product_url = "https://dev.everythingai.club";

module.exports = {
	siteUrl: product_url,
	generateRobotsTxt: true,
	exclude: ["/admin/*"],
	robotsTxtOptions: {
		policies: [
			{ userAgent: "*", disallow: "/admin/*" },
			{ userAgent: "*", allow: "/" },
		],
	},
};
