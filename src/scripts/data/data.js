const pricingOptions = [
	{ name: "Free", meta: "" },
	{ name: "Freemium", meta: "" },
	{ name: "Freemium", meta: "Pay as you go" },
	{ name: "Freemium", meta: "Pay only for advanced, otherwise free" },
	{ name: "Free Trial", meta: "No credit card required" },
	{ name: "Free Trial", meta: "Credit card required" },
	{ name: "Premium", meta: "Pay upfront" },
	{ name: "Subscription", meta: "" },
];

const categories = {
	Marketing: [
		"Branding",
		"Video Editing",
		"SEO",
		"Music",
		"Ads/Performance Marketing",
		"Email Marketing",
		"Social Media",
		"YouTube",
		"Instagram",
		"Facebook",
		"Twitter",
		"LinkedIn",
		"TikTok",
		"Pinterest",
		"Snapchat",
		"Reddit",
		"Quora",
		"Story Telling",
		"Content Writing",
		"Copywriting",
		"Summarizer",
		"Podcasts",
		"Social Media (YT, Insta, Linkedin)",
		"Other",
	],
	Sales: ["Outreach", "Automation", "Responses", "Social Media (YT, Insta, Linkedin)"],
	Product: ["Website Builder", "Landing pages", "Customer Development", "Analytics", "A/B Testing", "Low Code/No Code", "Other"],
	Developer: ["Code Assistant", "Dev Tools", "Low Code/No Code"],
	Data: ["Spreadsheets", "SQL"],
	Design: ["Presentations", "Thumbnails", "Design Assistant", "Logo Generator", "UI/UX", "Ad creatives"],
	Productivity: ["Work", "Personal", "Project Management", "Time Management", "Note Taking"],
	"Customer Support": [],
	Operations: [],
	HR: [],
	Legal: [],
	Video: ["Video Editing", "Video Generator", "Personalized Tools"],
	Audio: ["Text to Speech", "Audio Editing", "Music", "Transcriber"],
	Images: ["Image Generator", "Image Editing", "Avatars", "Art"],
	Text: [],
	"2-D": [],
	"3-D": [],
	Prompts: [],
	"Search Engine Results": [],
	"Customer Success": [],
	Industries: [
		"Education",
		"Finance",
		"Real Estate",
		"Healthcare",
		"Gaming",
		"Fun",
		"Fashion",
		"B2B SAAS",
		"Travel",
		"Fitness",
		"Dating",
		"Religion",
		"Memory",
		"Fun Tools",
		"Mental Health",
	],
};

const collections = [
	{
		name: "For Digital Nomads",
		description: "Make the best of your time while travelling",
		image: "https://everythingai.s3.ap-south-1.amazonaws.com/a503a233-6853-432b-b01d-43fb4bd4a408.jpg",
		metaDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Vestibulum sed arcu non odio euismod lacinia at quis. Arcu vitae elementum curabitur vitae nunc. Arcu dictum varius duis at consectetur. Diam donec adipiscing tristique risus nec feugiat. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Fames ac turpis egestas integer eget aliquet nibh praesent. Tincidunt dui ut ornare lectus sit amet. Mauris rhoncus aenean vel elit scelerisque mauris. Viverra aliquet eget sit amet tellus. Nunc consequat interdum varius sit amet mattis vulputate. Id velit ut tortor pretium viverra suspendisse potenti nullam. Vel facilisis volutpat est velit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Consequat nisl vel pretium lectus quam id leo. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac.",
	},
	{
		name: "For SaaS Entrepreneurs",
		description: "Grow your SaaS business using these tools",
		image: "https://everythingai.s3.ap-south-1.amazonaws.com/07c728d1-d819-44cc-a14b-365917e7b885.jpg",
		metaDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Vestibulum sed arcu non odio euismod lacinia at quis. Arcu vitae elementum curabitur vitae nunc. Arcu dictum varius duis at consectetur. Diam donec adipiscing tristique risus nec feugiat. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Fames ac turpis egestas integer eget aliquet nibh praesent. Tincidunt dui ut ornare lectus sit amet. Mauris rhoncus aenean vel elit scelerisque mauris. Viverra aliquet eget sit amet tellus. Nunc consequat interdum varius sit amet mattis vulputate. Id velit ut tortor pretium viverra suspendisse potenti nullam. Vel facilisis volutpat est velit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Consequat nisl vel pretium lectus quam id leo. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac.",
	},
	{
		name: "For Social Media Managers",
		description: "Manage and generate quality content quickly",
		image: "https://everythingai.s3.ap-south-1.amazonaws.com/a503a233-6853-432b-b01d-43fb4bd4a408.jpg",
		metaDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Vestibulum sed arcu non odio euismod lacinia at quis. Arcu vitae elementum curabitur vitae nunc. Arcu dictum varius duis at consectetur. Diam donec adipiscing tristique risus nec feugiat. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Fames ac turpis egestas integer eget aliquet nibh praesent. Tincidunt dui ut ornare lectus sit amet. Mauris rhoncus aenean vel elit scelerisque mauris. Viverra aliquet eget sit amet tellus. Nunc consequat interdum varius sit amet mattis vulputate. Id velit ut tortor pretium viverra suspendisse potenti nullam. Vel facilisis volutpat est velit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Consequat nisl vel pretium lectus quam id leo. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac.",
	},
	{
		name: "For Building Following on Linkedin",
		description: "Tools to scale your influence on Linkedin",
		image: "https://everythingai.s3.ap-south-1.amazonaws.com/07c728d1-d819-44cc-a14b-365917e7b885.jpg",
		metaDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Vestibulum sed arcu non odio euismod lacinia at quis. Arcu vitae elementum curabitur vitae nunc. Arcu dictum varius duis at consectetur. Diam donec adipiscing tristique risus nec feugiat. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Fames ac turpis egestas integer eget aliquet nibh praesent. Tincidunt dui ut ornare lectus sit amet. Mauris rhoncus aenean vel elit scelerisque mauris. Viverra aliquet eget sit amet tellus. Nunc consequat interdum varius sit amet mattis vulputate. Id velit ut tortor pretium viverra suspendisse potenti nullam. Vel facilisis volutpat est velit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Consequat nisl vel pretium lectus quam id leo. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac.",
	},
	{
		name: "For E-Commerce Entrepreneurs",
		description: "Tools for scaling your D2C business",
		image: "https://everythingai.s3.ap-south-1.amazonaws.com/b4c2c256-f654-4918-8c98-282bef3df372.jpg",
		metaDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Vestibulum sed arcu non odio euismod lacinia at quis. Arcu vitae elementum curabitur vitae nunc. Arcu dictum varius duis at consectetur. Diam donec adipiscing tristique risus nec feugiat. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Fames ac turpis egestas integer eget aliquet nibh praesent. Tincidunt dui ut ornare lectus sit amet. Mauris rhoncus aenean vel elit scelerisque mauris. Viverra aliquet eget sit amet tellus. Nunc consequat interdum varius sit amet mattis vulputate. Id velit ut tortor pretium viverra suspendisse potenti nullam. Vel facilisis volutpat est velit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Consequat nisl vel pretium lectus quam id leo. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac.",
	},
	{
		name: "For Improving Mental Health",
		description: "Tools to create balance and positivity",
		image: "https://everythingai.s3.ap-south-1.amazonaws.com/07c728d1-d819-44cc-a14b-365917e7b885.jpg",
		metaDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Vestibulum sed arcu non odio euismod lacinia at quis. Arcu vitae elementum curabitur vitae nunc. Arcu dictum varius duis at consectetur. Diam donec adipiscing tristique risus nec feugiat. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Fames ac turpis egestas integer eget aliquet nibh praesent. Tincidunt dui ut ornare lectus sit amet. Mauris rhoncus aenean vel elit scelerisque mauris. Viverra aliquet eget sit amet tellus. Nunc consequat interdum varius sit amet mattis vulputate. Id velit ut tortor pretium viverra suspendisse potenti nullam. Vel facilisis volutpat est velit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Consequat nisl vel pretium lectus quam id leo. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac.",
	},
	{
		name: "For Creators & Influencers",
		description: "Tools to build influence & create content",
		image: "https://everythingai.s3.ap-south-1.amazonaws.com/a503a233-6853-432b-b01d-43fb4bd4a408.jpg",
		metaDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Vestibulum sed arcu non odio euismod lacinia at quis. Arcu vitae elementum curabitur vitae nunc. Arcu dictum varius duis at consectetur. Diam donec adipiscing tristique risus nec feugiat. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Fames ac turpis egestas integer eget aliquet nibh praesent. Tincidunt dui ut ornare lectus sit amet. Mauris rhoncus aenean vel elit scelerisque mauris. Viverra aliquet eget sit amet tellus. Nunc consequat interdum varius sit amet mattis vulputate. Id velit ut tortor pretium viverra suspendisse potenti nullam. Vel facilisis volutpat est velit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Consequat nisl vel pretium lectus quam id leo. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac.",
	},
	{
		name: "For Content Writers",
		description: "Tools to write better copy & long form content",
		image: "https://everythingai.s3.ap-south-1.amazonaws.com/b4c2c256-f654-4918-8c98-282bef3df372.jpg",
		metaDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Vestibulum sed arcu non odio euismod lacinia at quis. Arcu vitae elementum curabitur vitae nunc. Arcu dictum varius duis at consectetur. Diam donec adipiscing tristique risus nec feugiat. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Fames ac turpis egestas integer eget aliquet nibh praesent. Tincidunt dui ut ornare lectus sit amet. Mauris rhoncus aenean vel elit scelerisque mauris. Viverra aliquet eget sit amet tellus. Nunc consequat interdum varius sit amet mattis vulputate. Id velit ut tortor pretium viverra suspendisse potenti nullam. Vel facilisis volutpat est velit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Consequat nisl vel pretium lectus quam id leo. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac.",
	},
	{
		name: "Our Top 25 AI Tools Collection",
		description: "Tools we love across all categories",
		image: "https://everythingai.s3.ap-south-1.amazonaws.com/a503a233-6853-432b-b01d-43fb4bd4a408.jpg",
		metaDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Vestibulum sed arcu non odio euismod lacinia at quis. Arcu vitae elementum curabitur vitae nunc. Arcu dictum varius duis at consectetur. Diam donec adipiscing tristique risus nec feugiat. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Fames ac turpis egestas integer eget aliquet nibh praesent. Tincidunt dui ut ornare lectus sit amet. Mauris rhoncus aenean vel elit scelerisque mauris. Viverra aliquet eget sit amet tellus. Nunc consequat interdum varius sit amet mattis vulputate. Id velit ut tortor pretium viverra suspendisse potenti nullam. Vel facilisis volutpat est velit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Consequat nisl vel pretium lectus quam id leo. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac.",
	},
];

const tools = [
	{
		name: "ChatGPT",
		url: "https://chat.openai.com",
		oneLiner: "ChatGPT is an artificial intelligence chatbot developed by OpenAI",
		logo: "https://everythingai.s3.ap-south-1.amazonaws.com/chatgpt.png",
		featured: 1,
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "",
		youtube: "",
	},
	{
		name: "Notion AI",
		url: "https://notion.so",
		oneLiner: "Your ultra-capable teammate. Messy notes? Have Notion AI summarize what's important and actionable",
		logo: "https://everythingai.s3.ap-south-1.amazonaws.com/notion-ai.png",
		featured: 2,
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Framer AI",
		url: "https://www.framer.com/ai",
		oneLiner: "AI generated, human curated. ... From raw idea to a real page in seconds. The more details you provide, the better the output",
		logo: "https://everythingai.s3.ap-south-1.amazonaws.com/framer-ai.png",
		featured: 3,
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "",
		youtube: "",
	},
	{
		name: "Writesonic",
		url: "https://writesonic.com",
		oneLiner: "Writesonic is an AI writer that creates SEO-friendly content for blogs, Facebook ads, Google ads, and Shopify for free",
		logo: "https://everythingai.s3.ap-south-1.amazonaws.com/writesonic.png",
		featured: 4,
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "",
		youtube: "",
	},
	{
		name: "BeachAI",
		url: "https://www.framer.com/ai",
		oneLiner: "BeachAI is a tool that helps you create a beach landing page in seconds",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "",
		youtube: "",
	},
	{
		name: "TowerAI",
		url: "https://www.framer.com/ai",
		oneLiner: "Tower ai helps you find nearest towers near you",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Stockimg AI",
		url: "https://stockimg.ai/",
		oneLiner: "Book Covers",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Scene One",
		url: "https://sceneone.app",
		oneLiner: "Write more stories + book writing tools",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Audioread",
		url: "https://audioread.com",
		oneLiner: "Turn your reads into podcasts",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Verb AI",
		url: "https://verb.ai",
		oneLiner: "Plan your book + community",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Taplio",
		url: "https://app.taplio.com",
		oneLiner: "Linkedin Ideas + Scheduling",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Salee Pro",
		url: "https://salee.pro",
		oneLiner: "Linkedin personalization",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Final Scout",
		url: "https://finalscout.com",
		oneLiner: "Linkedin reachout + Email finder",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Abney.ai",
		url: "https://www.abney.ai",
		oneLiner: "Write your podcast show notes",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Chat Shape",
		url: "https://www.chatshape.com",
		oneLiner: "Build AI Bots quickly",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Searchable AI",
		url: "https://www.searchable.ai",
		oneLiner: "All Work data in one",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Snazzy.ai",
		url: "https://snazzy.ai",
		oneLiner: "Creating landing pages + Ads + AI",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Comment Analyzer",
		url: "https://www.commentanalyzer.com/",
		oneLiner: "Comment Analyzer on youtube",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Eightify App",
		url: "https://eightify.app/?",
		oneLiner: "Youtube Summaries",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Lemon Recruiter",
		url: "https://chrome.google.com/webstore/detail/lemonrecruiter/kbgdnekpkdbagiccakldjfmhmncdnphc",
		oneLiner: "Lemon Recruiter",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "AIxstock",
		url: "https://www.futurepedia.io/tool/aixstock",
		oneLiner: "Stock images",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Quickvid.ai",
		url: "https://www.quickvid.ai",
		oneLiner: "Youtube Shorts",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Beatoven.ai",
		url: "https://www.beatoven.ai",
		oneLiner: "Royalty Free music",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Aiwoo",
		url: "https://www.futurepedia.io/tool/aiwoo-powerfull-ai-content-generator-for-woocommerce",
		oneLiner: "Generate unique Product Descriptions",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Casper AI",
		url: "https://chrome.google.com/webstore/detail/casper-ai/fgfiokgecpkambjildjleljjcihnocel?utm_source=futurepedia&utm_medium=marketplace&utm_campaign=futurepedia",
		oneLiner: "Simplify Work extensions",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 1",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 1",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 2",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 2",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 3",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 3",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 4",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 4",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 5",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 5",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 6",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 6",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 7",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 7",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 8",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 8",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 9",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 9",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 10",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 10",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 11",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 11",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 12",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 12",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 13",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 13",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 14",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 14",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 15",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 15",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 16",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 16",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 17",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 17",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 18",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 18",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 19",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 19",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 20",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 20",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 21",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 21",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 22",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 22",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 23",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 23",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 24",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 24",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 25",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 25",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 26",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 26",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 27",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 27",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 28",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 28",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 29",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 29",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 30",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 30",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 31",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 31",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 32",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 32",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 33",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 33",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 34",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 34",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 35",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 35",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 36",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 36",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 37",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 37",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 38",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 38",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 39",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 39",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 40",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 40",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 41",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 41",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 42",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 42",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 43",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 43",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 44",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 44",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 45",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 45",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 46",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 46",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 47",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 47",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 48",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 48",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 49",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 49",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 50",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 50",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 51",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 51",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 52",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 52",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 53",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 53",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 54",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 54",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 55",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 55",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 56",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 56",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 57",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 57",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 58",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 58",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 59",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 59",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 60",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 60",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 61",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 61",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 62",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 62",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 63",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 63",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 64",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 64",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 65",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 65",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 66",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 66",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 67",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 67",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 68",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 68",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 69",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 69",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 70",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 70",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 71",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 71",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 72",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 72",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 73",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 73",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 74",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 74",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 75",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 75",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 76",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 76",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 77",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 77",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 78",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 78",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 79",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 79",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 80",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 80",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 81",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 81",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 82",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 82",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 83",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 83",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 84",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 84",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 85",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 85",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 86",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 86",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 87",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 87",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 88",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 88",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 89",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 89",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 90",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 90",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 91",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 91",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 92",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 92",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 93",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 93",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 94",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 94",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 95",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 95",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 96",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 96",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 97",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 97",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 98",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 98",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
	{
		name: "Tool 99",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 99",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "",
		instagram: "",
		linkedin: "",
		youtube: "",
	},
	{
		name: "Tool 100",
		url: "https://www.framer.com/ai",
		oneLiner: "One-liner for Tool 100",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: [
			{
				heading: "Marketing",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Sales",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
			{
				heading: "Content",
				content:
					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
			},
		],
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
	},
];

module.exports = { categories, tools, pricingOptions, collections };
