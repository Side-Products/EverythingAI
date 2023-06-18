import PageWrapper from "@/layout/PageWrapper";
import SubmitTool from "@/components/SubmitTool";

export default function Submit() {
	return (
		<PageWrapper>
			<h1 className="text-[40px] sm:text-[60px] font-bold text-center tracking-[-1px] text-gradient-primary-tr leading-[1.2em]">Submit Tool</h1>
			<SubmitTool />
		</PageWrapper>
	);
}
