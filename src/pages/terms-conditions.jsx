import PageWrapper from "@/layout/PageWrapper";
import TermsConditionsComponent from "@/components/TermsConditions";

export default function TermsConditions() {
	return (
		<PageWrapper classes="w-full max-w-[768px] px-6 md:px-8 lg:px-0 py-40">
			<h1 className="text-[40px] sm:text-[60px] font-bold text-start tracking-[-1px] text-gradient-primary-tr leading-[1.2em]">Terms of Service</h1>
			<TermsConditionsComponent />
		</PageWrapper>
	);
}
