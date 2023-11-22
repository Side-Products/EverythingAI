import { useRouter } from "next/router";
import PageWrapper from "@/layout/PageWrapper";
import SubmitTool from "@/components/SubmitTool";

export default function Submit() {
  const router = useRouter();
  return (
    <PageWrapper
      title={"Submit A Tool | Everything AI"}
      description={
        "Submit your AI tool and join over 4,000 other featured tools on Everything AI. Reach a wider audience on our AI tools marketplace."
      }
    >
      <h1 className="text-[40px] sm:text-[60px] font-bold text-center tracking-[-1px] text-gradient-primary-tr leading-[1.2em]">
        Submit Tool
      </h1>
      {/* <SubmitTool /> */}
    </PageWrapper>
  );
}
