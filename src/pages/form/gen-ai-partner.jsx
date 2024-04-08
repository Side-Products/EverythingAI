import PageWrapper from "@/layout/PageWrapper";
import GenAIPartnerForm from "@/components/GenAIPartnerForm";

export default function GenAiPartner() {
	return (
		<PageWrapper title={"Become a Partner | Everything AI"}>
			<h1 className="text-[40px] sm:text-[60px] font-bold text-center tracking-[-1px] text-gradient-primary-tr leading-[1.2em]">
				Become a Gen AI Implementation Partner
			</h1>
			<GenAIPartnerForm />
		</PageWrapper>
	);
}
