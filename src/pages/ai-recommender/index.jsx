import PageWrapper from "@/layout/PageWrapper";
import AiRecommenderComp from "@/components/AiRecommender";

export default function AiRecommender() {
  return (
    <PageWrapper>
      <h1 className="text-[40px] sm:text-[60px] font-bold text-center tracking-[-1px] text-gradient-primary-tr leading-[1.2em]">
        AI Recommender
      </h1>
      <AiRecommenderComp />
    </PageWrapper>
  );
}
