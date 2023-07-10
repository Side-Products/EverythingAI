import Tool from "@/components/Tools/Tool";
import PageWrapper from "@/layout/PageWrapper";
import { getSession } from "next-auth/react";
import { wrapper } from "@/redux/redux-store";
import { getToolBySlug } from "@/redux/actions/toolActions";

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query, params }) => {
	const session = await getSession({ req: req });
	await store.dispatch(getToolBySlug(req, params.tool));

	return {
		props: { session },
	};
});

export default function Categories() {
	return (
		<PageWrapper>
			<Tool />
		</PageWrapper>
	);
}
