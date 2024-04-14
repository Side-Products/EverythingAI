import PartnerCard from "@/components/Cards/PartnerCard";

const Partners = ({ genAIPartners }) => {
	return genAIPartners && genAIPartners.length > 0 && genAIPartners.map((partner) => <PartnerCard key={partner._id} partner={partner} />);
};

export default Partners;
