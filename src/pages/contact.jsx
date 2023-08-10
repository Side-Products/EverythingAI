import PageWrapper from "@/layout/PageWrapper";
import ContactUs from "@/components/ContactUs";

export default function Contact() {
	return (
		<PageWrapper
			title={"Contact Us | Everything AI"}
			description={
				"Want to integrate AI into your organization? Let us help you reach a solution. Contact us via email or submit a query through our form."
			}
		>
			<h1 className="text-[40px] sm:text-[60px] font-bold text-center tracking-[-1px] text-gradient-primary-tr leading-[1.2em]">Contact Us</h1>
			<ContactUs />
		</PageWrapper>
	);
}
