import PageWrapper from "@/layout/PageWrapper";
import { contactus_meta_description } from "@/config/constants";
import ContactUs from "@/components/ContactUs";

export default function Contact() {
	return (
		<PageWrapper description={contactus_meta_description}>
			<h1 className="text-[40px] sm:text-[60px] font-bold text-center tracking-[-1px] text-gradient-primary-tr leading-[1.2em]">Contact Us</h1>
			<ContactUs />
		</PageWrapper>
	);
}
