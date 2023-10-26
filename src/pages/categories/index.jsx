import PageWrapper from "@/layout/PageWrapper";
import AllCategories from "@/components/Categories/AllCategories";

export default function Categories() {
  return (
    <PageWrapper
      title={"All Categories | Everything AI"}
      description={
        "Browse 4,000+ AI tools in 70+ categories and subcategories like marketing, sales, content writing, coding, etc. Find the one for you on Everything AI."
      }
    >
      <AllCategories />
    </PageWrapper>
  );
}
