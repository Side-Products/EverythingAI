import Image from "next/image";
import Button from "@/components/ui/Button";
import ToolSocials from "@/components/Tools/ToolUtils/ToolSocials";
import ToolPill from "@/components/Tools/ToolUtils/ToolPill";

export default function PartnerIntro({ partner, setShareModalOpen }) {
	const hasSocials = () => {
		return (partner?.instagram || partner?.twitter || partner?.linkedin || partner?.youtube)?.length > 0;
	};

	return (
		<div>
			<div className="grid grid-cols-1 lg:gap-y-0 gap-y-12 lg:grid-cols-2 gap-x-0 lg:gap-x-12 xl:gap-x-12 2xl:gap-x-0">
				<Image
					className="rounded-xl justify-self-start lg:w-[420px] lg:h-[300px] xl:w-[500px] xl:h-[500px]"
					width={500}
					height={500}
					src={partner?.logo}
					priority
					alt="partner logo"
				/>
				<div className="flex flex-col flex-1 h-full">
					<div>
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-1 md:space-x-3">
								<a
									href={partner?.utmLink || partner?.url || partner?.cta}
									target="_blank"
									rel="noreferrer"
									className="text-xl font-semibold cursor-pointer md:text-3xl lg:text-4xl font-secondary hover:text-primary-600"
								>
									{partner?.name}
								</a>
							</div>
						</div>

						<div className="flex w-full mt-4 mb-auto space-x-3">
							{partner.capabilities?.map((capability, index) => (
								<ToolPill pillText={capability} key={index} />
							))}
						</div>

						<p className="mt-5 text-sm font-medium md:mt-10 md:text-lg">{partner?.oneLiner}</p>
					</div>
					<div className="flex flex-col items-end justify-between w-full mt-auto">
						<div className="flex w-full flex-col">
							<p className="text-sm font-medium">Industries Specialized In:</p>
							<div className="flex w-full mt-2 mb-auto space-x-3">
								{partner.industriesSpecializedIn?.map((industry, index) => (
									<ToolPill pillText={industry} key={index} />
								))}
							</div>
						</div>
						<div className="flex flex-col justify-between w-full mt-auto xl:flex-row xl:items-end">
							<div className="mb-5 xl:mb-0">{hasSocials() && <ToolSocials tool={partner} />}</div>
							<div className="flex space-x-3">
								<div className="flex space-x-3">
									<Button type="button" variant="classic-100" onClick={() => setShareModalOpen(true)}>
										<div className="flex items-center justify-center space-x-2">
											<i className="text-xs sm:text-sm md:text-lg fa-solid fa-share-nodes"></i>
											<span className="text-xs sm:text-sm md:text-base">Share</span>
										</div>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
