import { wrapper } from "@/redux/redux-store";
import { useSelector } from "react-redux";
import { getAiRecommendation } from "@/redux/actions/aiRecommenderActions";
import PageWrapper from "@/layout/PageWrapper";
import AiRecommenderResultsComponent from "@/components/AiRecommender/AiRecommenderResults";

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query }) => {
	await store.dispatch(getAiRecommendation(req, query.id));

	return {
		props: {},
	};
});

export default function AiRecommenderResults() {
	const { recommendation } = useSelector((state) => state.getAiRecommendation);

	return <PageWrapper>{recommendation && <AiRecommenderResultsComponent recommendation={recommendation} />}</PageWrapper>;
}
