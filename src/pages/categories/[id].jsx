import { getSession } from "next-auth/react";
import { wrapper } from "@/redux/redux-store";
import { getCategory } from "@/redux/actions/categoryActions";
import { useSelector } from "react-redux";
import PageWrapper from "@/layout/PageWrapper";
import CategoryComponent from "@/components/Categories/Category";

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query }) => {
	const session = await getSession({ req: req });
	if (!session) {
		return {
			redirect: {
				destination: "/?login",
				permanent: false,
			},
		};
	}
	await store.dispatch(getCategory(req, query.id));

	return {
		props: {},
	};
});

const Category = () => {
	const { category } = useSelector((state) => state.category);

	return <PageWrapper>{category && <CategoryComponent category={category} />}</PageWrapper>;
};

export default Category;
