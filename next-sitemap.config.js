const product_url = "https://everything-ai.vercel.app";

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
