const pricingOptions = [
	{ name: "Free", meta: "" },
	{ name: "Freemium", meta: "Pay as you go" },
	{ name: "Free trial", meta: "without credit card" },
	{ name: "Free trial", meta: "with credit card" },
	{ name: "Premium", meta: "Pay upfront" },
	{ name: "Subscription", meta: "" },
	{ name: "Custom", meta: "" },
];

const categories = {
	Marketing: [
		"Branding",
		"SEO",
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
		"Other",
	],
	Sales: ["Outreach", "Automation", "Responses"],
	Product: ["Website Builder", "Landing pages", "Customer Development", "Analytics", "A/B Testing", "Other"],
	Developer: ["Code Assistant", "Developer Tools", "Low Code/No Code"],
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
	{ name: "For Digital Nomads", description: "Make the best of your time while travelling" },
	{ name: "For SaaS Entrepreneurs", description: "Grow your SaaS business using these tools" },
	{ name: "For Social Media Managers", description: "Manage and generate quality content quickly" },
	{ name: "For Building Following on Linkedin", description: "Tools to scale your influence on Linkedin" },
	{ name: "For E-Commerce Entrepreneurs", description: "Tools for scaling your D2C business" },
	{ name: "For Improving Mental Health", description: "Tools to create balance and positivity" },
	{ name: "For Creators & Influencers", description: "Tools to build influence & create content" },
	{ name: "For Content Writers", description: "Tools to write better copy & long form content" },
	{ name: "Our Top 25 AI Tools Collection", description: "Tools we love across all categories" },
];

const tools = [
	{
		name: "BeachAI",
		url: "https://beachai.com",
		oneLiner: "BeachAI is a tool that helps you create a beach landing page in seconds",
		image: "https://everythingai.s3.ap-south-1.amazonaws.com/07c728d1-d819-44cc-a14b-365917e7b885.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "",
		youtube: "",
		verified: true,
	},
	{
		name: "TowerAI",
		url: "https://towerai.com",
		oneLiner: "Tower ai helps you find nearest towers near you",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Stockimg AI",
		url: "https://stockimg.ai/",
		oneLiner: "Book Covers",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Scene One",
		url: "https://sceneone.app",
		oneLiner: "Write more stories + book writing tools",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Audioread",
		url: "https://audioread.com",
		oneLiner: "Turn your reads into podcasts",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Verb AI",
		url: "https://verb.ai",
		oneLiner: "Plan your book + community",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Taplio",
		url: "https://app.taplio.com",
		oneLiner: "Linkedin Ideas + Scheduling",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Salee Pro",
		url: "https://salee.pro",
		oneLiner: "Linkedin personalization",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Final Scout",
		url: "https://finalscout.com",
		oneLiner: "Linkedin reachout + Email finder",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Abney.ai",
		url: "https://www.abney.ai",
		oneLiner: "Write your podcast show notes",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Chat Shape",
		url: "https://www.chatshape.com",
		oneLiner: "Build AI Bots quickly",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Notion AI",
		url: "https://www.notion.so/product/ai?gspk=dml2ZWt2YXJtYTc0OTA&gsxid=ZjEehZIWjdBy&pscd=affiliate.notion.so&utm_medium=vivekvarma7490&utm_source=affl",
		oneLiner: "Notion AI Powered",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Searchable AI",
		url: "https://www.searchable.ai",
		oneLiner: "All Work data in one",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Snazzy.ai",
		url: "https://snazzy.ai",
		oneLiner: "Creating landing pages + Ads + AI",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Comment Analyzer",
		url: "https://www.commentanalyzer.com/",
		oneLiner: "Comment Analyzer on youtube",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Eightify App",
		url: "https://eightify.app/?",
		oneLiner: "Youtube Summaries",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Lemon Recruiter",
		url: "https://chrome.google.com/webstore/detail/lemonrecruiter/kbgdnekpkdbagiccakldjfmhmncdnphc",
		oneLiner: "Lemon Recruiter",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "AIxstock",
		url: "https://www.futurepedia.io/tool/aixstock",
		oneLiner: "Stock images",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Quickvid.ai",
		url: "https://www.quickvid.ai",
		oneLiner: "Youtube Shorts",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Beatoven.ai",
		url: "https://www.beatoven.ai",
		oneLiner: "Royalty Free music",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Aiwoo",
		url: "https://www.futurepedia.io/tool/aiwoo-powerfull-ai-content-generator-for-woocommerce",
		oneLiner: "Generate unique Product Descriptions",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Casper AI",
		url: "https://chrome.google.com/webstore/detail/casper-ai/fgfiokgecpkambjildjleljjcihnocel?utm_source=futurepedia&utm_medium=marketplace&utm_campaign=futurepedia",
		oneLiner: "Simplify Work extensions",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 1",
		url: "https://example.com/tool1",
		oneLiner: "One-liner for Tool 1",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 2",
		url: "https://example.com/tool2",
		oneLiner: "One-liner for Tool 2",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 3",
		url: "https://example.com/tool3",
		oneLiner: "One-liner for Tool 3",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 4",
		url: "https://example.com/tool4",
		oneLiner: "One-liner for Tool 4",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 5",
		url: "https://example.com/tool5",
		oneLiner: "One-liner for Tool 5",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 6",
		url: "https://example.com/tool6",
		oneLiner: "One-liner for Tool 6",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 7",
		url: "https://example.com/tool7",
		oneLiner: "One-liner for Tool 7",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 8",
		url: "https://example.com/tool8",
		oneLiner: "One-liner for Tool 8",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 9",
		url: "https://example.com/tool9",
		oneLiner: "One-liner for Tool 9",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 10",
		url: "https://example.com/tool10",
		oneLiner: "One-liner for Tool 10",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 11",
		url: "https://example.com/tool11",
		oneLiner: "One-liner for Tool 11",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 12",
		url: "https://example.com/tool12",
		oneLiner: "One-liner for Tool 12",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 13",
		url: "https://example.com/tool13",
		oneLiner: "One-liner for Tool 13",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 14",
		url: "https://example.com/tool14",
		oneLiner: "One-liner for Tool 14",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 15",
		url: "https://example.com/tool15",
		oneLiner: "One-liner for Tool 15",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 16",
		url: "https://example.com/tool16",
		oneLiner: "One-liner for Tool 16",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 17",
		url: "https://example.com/tool17",
		oneLiner: "One-liner for Tool 17",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 18",
		url: "https://example.com/tool18",
		oneLiner: "One-liner for Tool 18",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 19",
		url: "https://example.com/tool19",
		oneLiner: "One-liner for Tool 19",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 20",
		url: "https://example.com/tool20",
		oneLiner: "One-liner for Tool 20",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 21",
		url: "https://example.com/tool21",
		oneLiner: "One-liner for Tool 21",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 22",
		url: "https://example.com/tool22",
		oneLiner: "One-liner for Tool 22",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 23",
		url: "https://example.com/tool23",
		oneLiner: "One-liner for Tool 23",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 24",
		url: "https://example.com/tool24",
		oneLiner: "One-liner for Tool 24",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 25",
		url: "https://example.com/tool25",
		oneLiner: "One-liner for Tool 25",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 26",
		url: "https://example.com/tool26",
		oneLiner: "One-liner for Tool 26",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 27",
		url: "https://example.com/tool27",
		oneLiner: "One-liner for Tool 27",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 28",
		url: "https://example.com/tool28",
		oneLiner: "One-liner for Tool 28",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 29",
		url: "https://example.com/tool29",
		oneLiner: "One-liner for Tool 29",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 30",
		url: "https://example.com/tool30",
		oneLiner: "One-liner for Tool 30",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 31",
		url: "https://example.com/tool31",
		oneLiner: "One-liner for Tool 31",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 32",
		url: "https://example.com/tool32",
		oneLiner: "One-liner for Tool 32",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 33",
		url: "https://example.com/tool33",
		oneLiner: "One-liner for Tool 33",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 34",
		url: "https://example.com/tool34",
		oneLiner: "One-liner for Tool 34",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 35",
		url: "https://example.com/tool35",
		oneLiner: "One-liner for Tool 35",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 36",
		url: "https://example.com/tool36",
		oneLiner: "One-liner for Tool 36",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 37",
		url: "https://example.com/tool37",
		oneLiner: "One-liner for Tool 37",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 38",
		url: "https://example.com/tool38",
		oneLiner: "One-liner for Tool 38",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 39",
		url: "https://example.com/tool39",
		oneLiner: "One-liner for Tool 39",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 40",
		url: "https://example.com/tool40",
		oneLiner: "One-liner for Tool 40",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 41",
		url: "https://example.com/tool41",
		oneLiner: "One-liner for Tool 41",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 42",
		url: "https://example.com/tool42",
		oneLiner: "One-liner for Tool 42",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 43",
		url: "https://example.com/tool43",
		oneLiner: "One-liner for Tool 43",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 44",
		url: "https://example.com/tool44",
		oneLiner: "One-liner for Tool 44",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 45",
		url: "https://example.com/tool45",
		oneLiner: "One-liner for Tool 45",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 46",
		url: "https://example.com/tool46",
		oneLiner: "One-liner for Tool 46",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 47",
		url: "https://example.com/tool47",
		oneLiner: "One-liner for Tool 47",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 48",
		url: "https://example.com/tool48",
		oneLiner: "One-liner for Tool 48",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 49",
		url: "https://example.com/tool49",
		oneLiner: "One-liner for Tool 49",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 50",
		url: "https://example.com/tool50",
		oneLiner: "One-liner for Tool 50",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 51",
		url: "https://example.com/tool51",
		oneLiner: "One-liner for Tool 51",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 52",
		url: "https://example.com/tool52",
		oneLiner: "One-liner for Tool 52",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 53",
		url: "https://example.com/tool53",
		oneLiner: "One-liner for Tool 53",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 54",
		url: "https://example.com/tool54",
		oneLiner: "One-liner for Tool 54",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 55",
		url: "https://example.com/tool55",
		oneLiner: "One-liner for Tool 55",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 56",
		url: "https://example.com/tool56",
		oneLiner: "One-liner for Tool 56",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 57",
		url: "https://example.com/tool57",
		oneLiner: "One-liner for Tool 57",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 58",
		url: "https://example.com/tool58",
		oneLiner: "One-liner for Tool 58",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 59",
		url: "https://example.com/tool59",
		oneLiner: "One-liner for Tool 59",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 60",
		url: "https://example.com/tool60",
		oneLiner: "One-liner for Tool 60",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 61",
		url: "https://example.com/tool61",
		oneLiner: "One-liner for Tool 61",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 62",
		url: "https://example.com/tool62",
		oneLiner: "One-liner for Tool 62",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 63",
		url: "https://example.com/tool63",
		oneLiner: "One-liner for Tool 63",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 64",
		url: "https://example.com/tool64",
		oneLiner: "One-liner for Tool 64",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 65",
		url: "https://example.com/tool65",
		oneLiner: "One-liner for Tool 65",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 66",
		url: "https://example.com/tool66",
		oneLiner: "One-liner for Tool 66",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 67",
		url: "https://example.com/tool67",
		oneLiner: "One-liner for Tool 67",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 68",
		url: "https://example.com/tool68",
		oneLiner: "One-liner for Tool 68",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 69",
		url: "https://example.com/tool69",
		oneLiner: "One-liner for Tool 69",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 70",
		url: "https://example.com/tool70",
		oneLiner: "One-liner for Tool 70",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 71",
		url: "https://example.com/tool71",
		oneLiner: "One-liner for Tool 71",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 72",
		url: "https://example.com/tool72",
		oneLiner: "One-liner for Tool 72",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 73",
		url: "https://example.com/tool73",
		oneLiner: "One-liner for Tool 73",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 74",
		url: "https://example.com/tool74",
		oneLiner: "One-liner for Tool 74",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 75",
		url: "https://example.com/tool75",
		oneLiner: "One-liner for Tool 75",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 76",
		url: "https://example.com/tool76",
		oneLiner: "One-liner for Tool 76",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 77",
		url: "https://example.com/tool77",
		oneLiner: "One-liner for Tool 77",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 78",
		url: "https://example.com/tool78",
		oneLiner: "One-liner for Tool 78",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 79",
		url: "https://example.com/tool79",
		oneLiner: "One-liner for Tool 79",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 80",
		url: "https://example.com/tool80",
		oneLiner: "One-liner for Tool 80",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 81",
		url: "https://example.com/tool81",
		oneLiner: "One-liner for Tool 81",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 82",
		url: "https://example.com/tool82",
		oneLiner: "One-liner for Tool 82",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 83",
		url: "https://example.com/tool83",
		oneLiner: "One-liner for Tool 83",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 84",
		url: "https://example.com/tool84",
		oneLiner: "One-liner for Tool 84",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 85",
		url: "https://example.com/tool85",
		oneLiner: "One-liner for Tool 85",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 86",
		url: "https://example.com/tool86",
		oneLiner: "One-liner for Tool 86",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 87",
		url: "https://example.com/tool87",
		oneLiner: "One-liner for Tool 87",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 88",
		url: "https://example.com/tool88",
		oneLiner: "One-liner for Tool 88",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 89",
		url: "https://example.com/tool89",
		oneLiner: "One-liner for Tool 89",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 90",
		url: "https://example.com/tool90",
		oneLiner: "One-liner for Tool 90",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 91",
		url: "https://example.com/tool91",
		oneLiner: "One-liner for Tool 91",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 92",
		url: "https://example.com/tool92",
		oneLiner: "One-liner for Tool 92",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 93",
		url: "https://example.com/tool93",
		oneLiner: "One-liner for Tool 93",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 94",
		url: "https://example.com/tool94",
		oneLiner: "One-liner for Tool 94",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 95",
		url: "https://example.com/tool95",
		oneLiner: "One-liner for Tool 95",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 96",
		url: "https://example.com/tool96",
		oneLiner: "One-liner for Tool 96",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 97",
		url: "https://example.com/tool97",
		oneLiner: "One-liner for Tool 97",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 98",
		url: "https://example.com/tool98",
		oneLiner: "One-liner for Tool 98",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 99",
		url: "https://example.com/tool99",
		oneLiner: "One-liner for Tool 99",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
	{
		name: "Tool 100",
		url: "https://example.com/tool100",
		oneLiner: "One-liner for Tool 100",
		image: "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=Xn8tufsbSz0",
		features: `AI editor: Effortlessly edit text, images, and language translations to ensure that each word is precisely crafted to perfection.\n\n
		Content inspiration: Get content ideas as you write in the editor and get fresh ideas for your next creation.\n
		50+ Templates: Choose from handpicked curated templates for SEO, ad copywriting, marketing copywriting, social media content, and many more.`,
		useCases: `Marketing: Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.\n
		Sales: Increase your sales quota with AI-generated content, create conversion-focused emails, subject lines that boost open-rate, and convert prospects into profits.\n
		Support: Lightning-fast customer support with AI-powered conversations, immediate responses to customer queries, create support docs quickly, and generate comprehensive FAQs.\n
		Personal: Transform personal writing with AI-powered enhancements, stand out with compelling cover letters, impress with stellar LinkedIn bios, and accelerate your content creation process.`,
		category: "",
		subCategory: "",
		pricing: "",
		twitter: "https://twitter.com/Pushpit07",
		instagram: "https://www.instagram.com/pushpit._.07",
		linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
		youtube: "https://www.youtube.com/@pushpit07",
		verified: true,
	},
];

module.exports = { categories, tools, pricingOptions, collections };
