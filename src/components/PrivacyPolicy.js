import Link from "next/link";
import { product_name, product_website_legal, company_name, contact_email } from "@/config/constants";

export default function PrivacyPolicy() {
	return (
		<div className="w-full flex flex-col justify-center items-center pb-20 text-light-400">
			<div className="w-full relative text-base max-w-[1500px] text-dark-700">
				<div className="text-primary-400 text-sm pt-1">(Effective as of July 20, 2023)</div>

				<div className="font-semibold text-gradient-primary-tr leading-[30px] text-[1.2em] mt-12">This Privacy Policy applies to Everythingai.club</div>
				<div className="mt-5 font-secondary text-[1em] tracking-[0.5px]">
					Everythingai.club recognises the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This Policy
					describes how we treat user information we collect on{" "}
					<Link href={"/"} className="text-gradient-primary-tr">
						{product_website_legal}
					</Link>{" "}
					and other offline sources. This Privacy Policy applies to current and former visitors to our website and to our online customers. By
					visiting and/or using our website, you agree to this Privacy Policy. Everythingai.club is a property of Masterlife University Private
					Limited, an Indian Company registered under the Companies Act, 2013 having its registered office at 130,SFS-208, Yelahanka New Town,
					Opposite Mother dairy, Bangalore – 560064
				</div>

				<div className="font-semibold text-gradient-primary-tr leading-[30px] text-[1.6em] mt-12">Information we collect</div>
				<div className="mt-4 font-secondary text-[1em] tracking-[0.5px] flex flex-col gap-y-5">
					<p>
						<b>Contact information.</b> We might collect your name, email, mobile number, phone number, street, city, state, pincode, country and ip
						address.
					</p>
					<p>
						<b>Payment and billing information.</b> We might collect your billing name, billing address and payment method when you buy a
						subscription. We NEVER collect your credit card number or credit card expiry date or other details pertaining to your credit card on our
						website. Credit card information will be obtained and processed by our online payment partner.
					</p>
					<p>
						<b>Information you post.</b> We collect information you post in a public space on our website or on a third-party social media site
						belonging to Everythingai.club.
					</p>
					<p>
						<b>Demographic information.</b> We may collect demographic information about you, tools you like, save or any other information provided
						by your during the use of our website. We might collect this as a part of a survey also.
					</p>
					<p>
						<b>Other information.</b> If you use our website, we may collect information about your IP address and the browser you’re using. We
						might look at what site you came from, duration of time spent on our website, pages accessed or what site you visit when you leave us.
						We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is
						running.
					</p>
				</div>

				<div className="font-semibold text-gradient-primary-tr leading-[30px] text-[1.6em] mt-12">We collect information in different ways</div>
				<div className="mt-4 font-secondary text-[1em] tracking-[0.5px] flex flex-col gap-y-5">
					<p>
						<b>We collect information directly from you.</b> We collect information directly from you when you register for our newsletter or create
						an account. We also collect information if you post a comment on our website or ask us a question through phone or email.
					</p>
					<p>
						<b>We collect information from you passively.</b> We use tracking tools like Google Analytics, Google Webmaster, browser cookies and web
						beacons for collecting information about your usage of our website.
					</p>
					<p>
						<b>We get information about you from third parties.</b> For example, if you use an integrated social media feature on our websites. The
						third-party social media site will give us certain information about you. This could include your name and email address.
					</p>
				</div>

				<div className="font-semibold text-gradient-primary-tr leading-[30px] text-[1.6em] mt-12">Use of your personal information</div>
				<div className="mt-4 font-secondary text-[1em] tracking-[0.5px] flex flex-col gap-y-5">
					<p>
						<b>We use information to contact you:</b> We might use the information you provide to contact you for confirmation of a purchase on our
						website or for other promotional purposes.
					</p>
					<p>
						<b>We use information to respond to your requests or questions.</b> We might use your information to confirm your registration for an
						event or email newsletters.
					</p>
					<p>
						<b>We use information to improve our products and services.</b> We might use your information to customize your experience with us. This
						could include displaying content based upon your preferences.
					</p>
					<p>
						<b>We use information to look at site trends and customer interests.</b> We may use your information to make our website and products
						better. We may combine information we get from you with information about you we get from third parties.
					</p>
					<p>
						<b>We use information for security purposes.</b> We may use information to protect our company, our customers, or our websites.
					</p>
					<p>
						<b>We use information for marketing purposes.</b> We might send you information about special promotions or offers. We might also tell
						you about new features or products. These might be our own offers or products, or third-party offers or products we think you might find
						interesting.
					</p>
					<p>
						<b>We use information to send you transactional communications.</b> We might send you emails or SMS about your account or purchase. We
						use information as otherwise permitted by law.
					</p>
				</div>

				<div className="font-semibold text-gradient-primary-tr leading-[30px] text-[1.6em] mt-12">Sharing of information with third-parties</div>
				<div className="mt-4 font-secondary text-[1em] tracking-[0.5px] flex flex-col gap-y-5">
					<p>
						<b>We will share information with third parties who perform services on our behalf.</b> We share information with vendors who help us
						manage our online registration process or payment processors or transactional message processors. Some vendors may be located outside of
						India.
					</p>
					<p>
						<b>We will share information with our business partners.</b> This includes a third party who provide or sponsor an event or content, or
						who operates a venue where we hold events. Our partners use the information we give them as described in their privacy policies.
					</p>
					<p>
						<b>We may share information if we think we have to in order to comply with the law or to protect ourselves.</b> We will share
						information to respond to a court order or subpoena. We may also share it if a government agency or investigatory body requests. Or, we
						might also share information when we are investigating potential fraud.
					</p>
					<p>
						<b>We may share information with any successor to all or part of our business.</b> For example, if part of our business is sold we may
						give our customer list as part of that transaction.
					</p>
					<p>
						<b>We may share your information for reasons not described in this policy.</b> We will tell you before we do this.
					</p>
				</div>

				<div className="font-semibold text-gradient-primary-tr leading-[30px] text-[1.6em] mt-12">Email Opt-Out</div>
				<div className="mt-4 font-secondary text-[1em] tracking-[0.5px]">
					<p>
						<b>You can opt out of receiving our marketing emails.</b> To stop receiving our promotional emails, please email {contact_email}. It may
						take about ten days to process your request. Even if you opt out of getting marketing messages, we will still be sending you
						transactional messages through email and SMS about your purchases.
					</p>
				</div>

				<div className="font-semibold text-gradient-primary-tr leading-[30px] text-[1.6em] mt-12">Third party sites</div>
				<div className="mt-4 font-secondary text-[1em] tracking-[0.5px]">
					If you click on one of the links to third party websites, you may be taken to websites we do not control. This policy does not apply to the
					privacy practices of those websites. Read the privacy policy of other websites carefully. We are not responsible for these third party
					sites.
				</div>

				<div className="font-semibold text-gradient-primary-tr leading-[30px] text-[1.6em] mt-12">Grievance Officer</div>
				<div className="mt-4 font-secondary text-[1em] tracking-[0.5px]">
					In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are
					provided below:
					<br />
					<br />
					Mr. Anirudh Narayan
					<br />
					130, SFS-208, Yelahanka New Town, Opposite Mother dairy, Bangalore – 560064
					<br />
					Phone: +91 96866 27129
					<br />
					Email: {contact_email}
					<br />
					<br />
					If you have any questions about this Policy or other privacy concerns, you can also email us at{" "}
					<a href={`mailto:` + contact_email} target="_blank" rel="noopener noreferrer" className="font-primary font-semibold text-primary-600">
						{contact_email}
					</a>
				</div>

				<div className="font-semibold text-gradient-primary-tr leading-[30px] text-[1.6em] mt-12">Updates to this policy</div>
				<div className="mt-4 font-secondary text-[1em] tracking-[0.5px]">
					This Privacy Policy was last updated on 24.04.2023. From time to time we may change our privacy practices. We will notify you of any
					material changes to this policy as required by law. We will also post an updated copy on our website. Please check our site periodically for
					updates.
				</div>

				<div className="font-semibold text-gradient-primary-tr leading-[30px] text-[1.6em] mt-12">Jurisdiction</div>
				<div className="mt-4 font-secondary text-[1em] tracking-[0.5px]">
					If you choose to visit the website, your visit and any dispute over privacy is subject to this Policy and the website’s terms of use. In
					addition to the foregoing, any disputes arising under this Policy shall be governed by the laws of India.
				</div>
			</div>
		</div>
	);
}
