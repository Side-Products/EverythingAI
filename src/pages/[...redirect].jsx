import { wrapper } from "@/redux/redux-store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      const blogUrl = "https://blog.everythingai.club";
      const redirectToBlogUrls = [
        "https://everythingai.club/author/root",
        "https://www.everythingai.club/ai-tools-for-cxos",
        "https://www.everythingai.club/ai-tools-for-social-media-managers",
        "https://www.everythingai.club/tag/cheap-ai-tools",
        "https://www.everythingai.club/ai-tools-for-productivity",
        "https://www.everythingai.club/tag/free-ai-tools",
        "https://www.everythingai.club/ai-tools-for-healthcare",
        "https://everythingai.club/ai-tools-for-writing",
        "https://www.everythingai.club/tag/twitter",
        "https://www.everythingai.club/ai-tools-ui-ux",
        "https://www.everythingai.club/tag/work-productivity",
        "https://www.everythingai.club/tag/podcasts",
        "https://www.everythingai.club/ai-tools-for-twitter",
        "https://everythingai.club/tag/authors",
        "https://www.everythingai.club/tag/healthcare",
        "https://everythingai.club/tag/content-writing",
        "https://everythingai.club/tag/podcasts",
        "https://everythingai.club/tag/dating",
        "https://everythingai.club/ai-tools-for-authors",
        "https://everythingai.club/how-to-release-a-podcast-using-ai",
        "https://everythingai.club/tag/podcasts/feed",
        "https://everythingai.club/tag/video-generator",
        "https://www.everythingai.club/smarten-up-your-saas-game-10-ai-tools-every-entrepreneur-needs",
        "https://everythingai.club/tag/ai-tools-for-authors",
        "https://everythingai.club/category/uncategorized",
      ];
      if (redirectToBlogUrls.some((url) => url.includes(req.url))) {
        return {
          redirect: {
            destination: blogUrl + req.url.replace(/\/feed$/, ""), // The URL to redirect to
            permanent: true, // Set to true for permanent redirect, false for temporary
          },
        };
      }

      const redirectCategoryUrl = "https://everythingai.club";
      const redirectCategoryUrls = [
        "https://www.everythingai.club/category/marketing",
        "https://www.everythingai.club/category/audio",
        "https://www.everythingai.club/category/video",
        "https://www.everythingai.club/category/operations",
        "https://www.everythingai.club/category/hr",
        "https://everythingai.club/category/productivity/feed",
      ];
      if (redirectCategoryUrls.some((url) => url.includes(req.url))) {
        let destinationUrl = req.url.replace(/\/category\//, "/categories/");
        destinationUrl = destinationUrl.replace(/\/feed$/, "");
        return {
          redirect: {
            destination: redirectCategoryUrl + destinationUrl, // The URL to redirect to
            permanent: true, // Set to true for permanent redirect, false for temporary
          },
        };
      }

      const links = [
        "https://everythingai.club/abney-ai",
        "https://everythingai.club/2shortai",
        "https://everythingai.club/about",
        "https://everythingai.club/activazon",
        "https://everythingai.club/ad-creative",
        "https://everythingai.club/adobe-podcast",
        "https://everythingai.club/collections",
        "https://everythingai.club/ai-customer-success-tools",
        "https://everythingai.club/ai-design-tools",
        "https://everythingai.club/ai-lawyer",
        "https://everythingai.club/ai-marketing-tools",
        "https://everythingai.club/ai-productivity-tools",
        "https://everythingai.club/ai-sales-tools",
        "https://everythingai.club/tools",
        "https://everythingai.club/ai-tools-for-d2c-brands",
        "https://everythingai.club/digital-nomads",
        "https://everythingai.club/ai-tools-for-linkedin",
        "https://everythingai.club/ai-tools-for-mental-health",
        "https://everythingai.club/saas-entrepreneurs",
        "https://everythingai.club/social-media-managers",
        "https://everythingai.club/ai-tools-for-startups",
        "https://everythingai.club/ai-tools-for-writing",
        "https://everythingai.club/aidaptive",
        "https://everythingai.club/aiflow-ai",
        "https://everythingai.club/amazon-codewhisperer",
        "https://everythingai.club/audiolabs-io",
        "https://everythingai.club/audioread",
        "https://everythingai.club/autoslide-ai",
        "https://everythingai.club/avanty",
        "https://everythingai.club/beatoven-ai",
        "https://everythingai.club/beautiful-ai",
        "https://everythingai.club/bg-eraser",
        "https://everythingai.club/blog",
        "https://everythingai.club/blush",
        "https://everythingai.club/brain-fish",
        "https://everythingai.club/browse-ai",
        "https://everythingai.club/build-ai",
        "https://everythingai.club/caffeinatedcx",
        "https://everythingai.club/careerflow",
        "https://everythingai.club/casper-ai",
        "https://everythingai.club/charm",
        "https://everythingai.club/chat-gpt-4",
        "https://everythingai.club/chat-shape",
        "https://everythingai.club/chatfuel",
        "https://everythingai.club/chatgpt4youtube",
        "https://everythingai.club/aixstock",
        "https://everythingai.club/clickable-so",
        "https://everythingai.club/clips-ai",
        "https://everythingai.club/coach-vox",
        "https://everythingai.club/codeium",
        "https://everythingai.club/comment-analyzer",
        "https://everythingai.club/comment-reply-ai",
        "https://everythingai.club/contact",
        "https://everythingai.club/copy-ai-2",
        "https://everythingai.club/cover-doc-ai",
        "https://everythingai.club/dalle-2",
        "https://everythingai.club/darrow-ai",
        "https://everythingai.club/deep-agency",
        "https://everythingai.club/elementor-1863",
        "https://everythingai.club/delve-ai",
        "https://everythingai.club/detangle-ai",
        "https://everythingai.club/donotpay",
        "https://everythingai.club/durable",
        "https://everythingai.club/echo",
        "https://everythingai.club/every-lead-ai",
        "https://everythingai.club/everything-ais-top-25",
        "https://everythingai.club/exod-ai",
        "https://everythingai.club/fast-ai",
        "https://everythingai.club/final-scout",
        "https://everythingai.club/fireflies",
        "https://everythingai.club/fliki",
        "https://everythingai.club/formula-generator",
        "https://everythingai.club/genius-review",
        "https://everythingai.club/auto-responder",
        "https://everythingai.club/get-munch",
        "https://everythingai.club/get-it-out",
        "https://everythingai.club/git-hub-co-pilot",
        "https://everythingai.club/git-influence",
        "https://everythingai.club/goodlookup",
        "https://everythingai.club/gpt-for-sheets",
        "https://everythingai.club/gpt-excel",
        "https://everythingai.club/hairstyleai",
        "https://everythingai.club/hire-people",
        "https://everythingai.club/hiver",
        "https://everythingai.club/hyperise",
        "https://everythingai.club/insta-novel-ai",
        "https://everythingai.club/instyle",
        "https://everythingai.club/interflexion",
        "https://everythingai.club/jasper",
        "https://everythingai.club/kindly",
        "https://everythingai.club/krisp",
        "https://everythingai.club/lemon-recruiter",
        "https://everythingai.club/levity-ai",
        "https://everythingai.club/looka",
        "https://everythingai.club/loopinhq",
        "https://everythingai.club/magic-thumbnails",
        "https://everythingai.club/murf-ai",
        "https://everythingai.club/my-account",
        "https://everythingai.club/my-account-2",
        "https://everythingai.club/notion-ai",
        "https://everythingai.club/our-top-25-tools",
        "https://everythingai.club/pebblely",
        "https://everythingai.club/persona-gen",
        "https://everythingai.club/podcastle",
        "https://everythingai.club/privacy-policy",
        "https://everythingai.club/privacy",
        "https://everythingai.club/quickvid-ai",
        "https://everythingai.club/replai-so",
        "https://everythingai.club/replika",
        "https://everythingai.club/research-rabbit-ai",
        "https://everythingai.club/roamaround-io",
        "https://everythingai.club/salee-pro",
        "https://everythingai.club/searchable-ai",
        "https://everythingai.club/smart-copy",
        "https://everythingai.club/smart-writer-ai",
        "https://everythingai.club/stockimg-ai",
        "https://everythingai.club/taplio",
        "https://everythingai.club/terms_conditions",
        "https://everythingai.club/tome-app",
        "https://everythingai.club/ai-tools-for-authors",
        "https://everythingai.club/uizard-io",
        "https://everythingai.club/use-vacay",
        "https://everythingai.club/verb-ai",
        "https://everythingai.club/viral-post-generator",
        "https://everythingai.club/warmer",
        "https://everythingai.club/whimsical-ai",
        "https://everythingai.club/woebot",
        "https://everythingai.club/write-sonic",
        "https://everythingai.club/wysa",
        "https://everythingai.club/youper",
        "https://everythingai.club/your-own-story-book",
        "https://everythingai.club/zmo-ai",
      ];
      const link = "https://everythingai.club" + req.url;
      if (links.includes(link)) {
        return {
          redirect: {
            destination: "https://everythingai.club/tools" + req.url, // The URL to redirect to
            permanent: true, // Set to true for permanent redirect, false for temporary
          },
        };
      }

      return {
        notFound: true,
      };
    }
);

const RedirectPage = () => {
  return <></>;
};

export default RedirectPage;
