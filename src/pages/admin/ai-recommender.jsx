import { wrapper } from "@/redux/redux-store";
import { getSession } from "next-auth/react";
import { adminGetAllAiRecommendations } from "@/redux/actions/aiRecommenderActions";
import PageWrapper from "@/layout/PageWrapper";
import AllAiRecommenderResponses from "@/components/Admin/AllAiRecommenderResponses";

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
	const session = await getSession({ req: req });

	if (!session || session.user.role !== "admin") {
		return {
			redirect: {
				destination: "/?login",
				permanent: false,
			},
		};
	}

	await store.dispatch(adminGetAllAiRecommendations(req));

	return {
		props: { session },
	};
});

export default function Users() {
	return (
		<PageWrapper>
			<div className="w-full flex flex-col items-center justify-center">
				<h1 className="text-[60px] font-bold text-center tracking-[-1px] leading-[70px] text-gradient-primary-tr">All AI Recommender Responses</h1>
				<AllAiRecommenderResponses />
			</div>
		</PageWrapper>
	);
}
