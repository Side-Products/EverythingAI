import Partner from "@/components/Partners/Partner";
import PageWrapper from "@/layout/PageWrapper";
import { getSession } from "next-auth/react";
import { wrapper } from "@/redux/redux-store";
import { getPartnerBySlug } from "@/redux/actions/genAIPartnerActions";
import { getAllCollectionsServerSide } from "@/redux/actions/collectionActions";
import { useSelector } from "react-redux";

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
	const session = await getSession({ req: req });
	await store.dispatch(getPartnerBySlug(req, params.partner));
	await store.dispatch(getAllCollectionsServerSide(req, 10));
	return {
		props: { session },
	};
});

export default function Categories() {
	const { partner } = useSelector((state) => state.genAIPartner);

	return (
		<PageWrapper
			title={`${partner?.name} - Everything You Need to Know (2023)`}
			description={`${partner?.name} - ${partner?.oneLiner}  Explore features, use cases & more.`}
			classes={"w-full max-w-[1920px] pt-44 pb-32 px-4 md:px-6 lg:px-10 xl:px-24 2xl:px-32"}
		>
			<Partner />
		</PageWrapper>
	);
}
