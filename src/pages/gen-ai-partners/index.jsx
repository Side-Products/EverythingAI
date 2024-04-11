import PageWrapper from "@/layout/PageWrapper";
import { wrapper } from "@/redux/redux-store";
import { useSelector } from "react-redux";
import { getAllGenAIPartnersServerSide } from "@/redux/actions/genAIPartnerActions";
import GenAIPartnersMarketplace from "@/components/Marketplace/GenAIPartners";

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query }) => {
	await store.dispatch(getAllGenAIPartnersServerSide(req, "", query));

	return {
		props: {},
	};
});

export default function GenAIPartners() {
	const { genAIPartners } = useSelector((state) => state.allGenAIPartners);

	return (
		<PageWrapper
			title={"All Gen AI Partners | Everything AI"}
			description={
				"Browse 4,000+ AI tools to find the one for you. Everything AI helps you find the best-curated set of tools & helps you learn how to use them together."
			}
			useDefaultContainer={false}
		>
			<GenAIPartnersMarketplace genAIPartners={genAIPartners} />
		</PageWrapper>
	);
}
