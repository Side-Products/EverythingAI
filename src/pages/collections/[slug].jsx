import { getSession } from "next-auth/react";
import { wrapper } from "@/redux/redux-store";
import { getCollectionBySlug } from "@/redux/actions/collectionActions";
import { useSelector } from "react-redux";
import PageWrapper from "@/layout/PageWrapper";
import CollectionComponent from "@/components/Collections/Collection";

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query }) => {
	const session = await getSession({ req: req });
	await store.dispatch(getCollectionBySlug(req, query.slug));

	return {
		props: {},
	};
});

export default function Collection() {
	const { collection } = useSelector((state) => state.collection);

	return (
		<PageWrapper title={collection.name} description={collection.metaDescription}>
			{collection && <CollectionComponent collection={collection} />}
		</PageWrapper>
	);
}
