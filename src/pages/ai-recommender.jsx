import PageWrapper from "@/layout/PageWrapper";
import AIRecommenderComp from "@/components/AiRecommender";

const AiRecommender = () => {
  return (
    <PageWrapper
      title={"Everything AI Recommender"}
      description={
        "Browse 4,000+ AI tools to find the one for you. Everything AI helps you find the best-curated set of tools & helps you learn how to use them together."
      }
    >
      <h1 className="text-[40px] sm:text-[60px] font-bold text-center tracking-[-1px] text-gradient-primary-tr leading-[1.2em]">
        AI Recommender
      </h1>
      <AIRecommenderComp />
    </PageWrapper>
  );
};

export default AiRecommender;
