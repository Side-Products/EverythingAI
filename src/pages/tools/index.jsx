import { useEffect } from "react";
import PageWrapper from "@/layout/PageWrapper";
import { wrapper } from "@/redux/redux-store";
import { useSelector, useDispatch } from "react-redux";
import { getAllToolsServerSide } from "@/redux/actions/toolActions";
import Marketplace from "@/components/Marketplace";
import { getAllCategories } from "@/redux/actions/categoryActions";
import { getAllSubCategories } from "@/redux/actions/subCategoryActions";
import { getAllPricings } from "@/redux/actions/pricingActions";

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query }) => {
	await store.dispatch(getAllToolsServerSide(req, "explore", query));

	return {
		props: {},
	};
});

export default function Tools() {
	const { tools } = useSelector((state) => state.allTools);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllCategories());
		dispatch(getAllSubCategories());
		dispatch(getAllPricings());
	}, [dispatch]);

	return (
		<PageWrapper
			title={"All Tools | Everything AI"}
			description={
				"Browse 4,000+ AI tools to find the one for you. Everything AI helps you find the best-curated set of tools & helps you learn how to use them together."
			}
			useDefaultContainer={false}
		>
			<Marketplace tools={tools} />
		</PageWrapper>
	);
}
