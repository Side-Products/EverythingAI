const product_url = "https://everythingai.club";

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
