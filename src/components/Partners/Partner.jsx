import { useState } from "react";
import { useSelector } from "react-redux";
import ShareModal from "@/components/ui/ShareModal";
import PartnerIntro from "@/components/Partners/PartnerIntro";
import Cta from "@/components/Partners/Cta";
import DemoVideo from "@/components/Tools/DemoVideo";
import ReviewsAccordion from "@/components/Partners/ReviewsAccordion";
import Collections from "@/components/Tools/Collections";

export default function Tool() {
	const { genAIPartner: partner } = useSelector((state) => state.genAIPartner);
	const tool = partner;
	/*******************************
	 *******  SHARE BUTTON  ********
	 *******************************/
	const [isShareModalOpen, setShareModalOpen] = useState(false);

	return (
		<>
			<div className="flex flex-col space-y-20">
				<PartnerIntro partner={partner} setShareModalOpen={setShareModalOpen} />

				<div className="grid w-full h-full md:grid-cols-2 gap-x-10 gap-y-16">
					{partner?.sizeOfCompany && (
						<div className="flex flex-col w-full h-full space-y-4">
							<div className="text-xl font-semibold md:text-2xl">Size of Company</div>
							<div className="w-full h-full flex p-8 bg-gray-200 border-[2px] border-gray-300 rounded-2xl">
								{partner?.sizeOfCompany} employees
							</div>
						</div>
					)}

					{(partner?.country || partner?.state) && (
						<div className="flex flex-col w-full h-full space-y-4">
							<div className="text-xl font-semibold md:text-2xl">Headquarters</div>
							<div className="w-full h-full flex flex-col p-8 bg-gray-200 border-[2px] border-gray-300 rounded-2xl">
								{partner?.country && (
									<div>
										<i>Country:</i> {partner?.country}
									</div>
								)}
								{partner?.state && (
									<div>
										<i>State:</i> {partner?.state}
									</div>
								)}
							</div>
						</div>
					)}

					{partner?.videoLink && <DemoVideo link={partner?.videoLink} partner={true} />}

					{partner?.reviewFromCompanies && partner?.reviewFromCompanies.length > 0 && (
						<div className="flex flex-col w-full space-y-4">
							<div className="text-2xl font-semibold">Review from Companies</div>
							<ReviewsAccordion reviewFromCompanies={partner?.reviewFromCompanies} />
						</div>
					)}

					{partner?.partners && partner?.partners.length > 0 && (
						<div className="flex flex-col w-full h-full space-y-4">
							<div className="text-xl font-semibold md:text-2xl">Partners</div>
							<div className="w-full h-full flex p-8 bg-gray-200 border-[2px] border-gray-300 rounded-2xl">
								<div className="w-full h-full flex flex-col space-y-6">
									<div className="text-base whitespace-pre-line features-list pl-4">
										<ul className="list-disc flex flex-col space-y-4">
											{partner?.partners.map((pName, index) => (
												<li key={index}>{pName}</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					)}

					{partner?.caseStudies && partner?.caseStudies.length > 0 && (
						<div className="flex flex-col w-full h-full space-y-4">
							<div className="text-xl font-semibold md:text-2xl">Case Studies/Links</div>
							<div className="w-full h-full flex p-8 bg-gray-200 border-[2px] border-gray-300 rounded-2xl">
								<div className="w-full h-full flex flex-col space-y-6">
									<div className="text-base whitespace-pre-line features-list pl-4">
										<ul className="list-disc flex flex-col space-y-4">
											{partner?.caseStudies.map((studyLink, index) => (
												<li key={index}>
													<a href={studyLink} target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
														{studyLink}
													</a>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* <div className={"block flex flex-col w-full space-y-4 col-span-2"}>
						<div className="text-2xl font-semibold">Explore our collections</div>
						<Collections />
					</div> */}
				</div>

				<Cta partner={partner} />
			</div>
			<ShareModal isOpen={isShareModalOpen} setOpen={setShareModalOpen} tool={tool} />
		</>
	);
}
