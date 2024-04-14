import GenAIPartnersNav from "./GenAIPartnersNav";
import GenAIPartnersBody from "./GenAIPartnersBody";

export default function GenAIPartnersMarketplace({ genAIPartners }) {
	return (
		<>
			<GenAIPartnersNav />
			<GenAIPartnersBody genAIPartners={genAIPartners} />
		</>
	);
}
