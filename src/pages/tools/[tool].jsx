import Tool from "@/components/Tools/Tool";
import PageWrapper from "@/layout/PageWrapper";
import { getSession } from "next-auth/react";
import { wrapper } from "@/redux/redux-store";
import { getToolBySlug } from "@/redux/actions/toolActions";
import { getAllCollectionsServerSide } from "@/redux/actions/collectionActions";
import { useSelector } from "react-redux";
import { getPurchaseTermsByToolSlug } from "@/redux/actions/purchaseTermsActions";

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query, params }) => {
	const session = await getSession({ req: req });
	await store.dispatch(getToolBySlug(req, params.tool));
	await store.dispatch(getAllCollectionsServerSide(req, 10));
	await store.dispatch(getPurchaseTermsByToolSlug(req, params.tool));
	return {
		props: { session },
	};
});

export default function Categories() {
	const { tool } = useSelector((state) => state.tool);

	return (
		<PageWrapper
			title={`${tool?.name} - Everything You Need to Know (2023)`}
			description={`${tool?.name} - ${tool?.oneLiner}  Explore features, use cases & more.`}
		>
			<Tool />
		</PageWrapper>
	);
}
