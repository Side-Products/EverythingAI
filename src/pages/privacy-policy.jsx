import PageWrapper from "@/layout/PageWrapper";
import PrivacyComponent from "@/components/PrivacyPolicy";

export default function PrivacyPolicy() {
	return (
		<PageWrapper
			title={"Privacy Policy | Everything AI"}
			description={
				"At Everything AI, we are committed to protecting your privacy. Our privacy policy outlines how we collect and use your personal information."
			}
			classes="w-full max-w-[768px] px-6 md:px-8 lg:px-0 py-40"
		>
			<h1 className="text-[40px] sm:text-[60px] font-bold text-start tracking-[-1px] text-gradient-primary-tr leading-[1.2em]">Privacy Policy</h1>
			<PrivacyComponent />
		</PageWrapper>
	);
}
