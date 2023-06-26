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
		<PageWrapper useDefaultContainer={false}>
			<Marketplace tools={tools} />
		</PageWrapper>
	);
}
