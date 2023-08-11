import { getSession } from "next-auth/react";
import { wrapper } from "@/redux/redux-store";
import { getCategoryByName } from "@/redux/actions/categoryActions";
import { useSelector } from "react-redux";
import PageWrapper from "@/layout/PageWrapper";
import CategoryComponent from "@/components/Categories/Category";

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query }) => {
	const session = await getSession({ req: req });
	await store.dispatch(getCategoryByName(req, query.name));

	return {
		props: {},
	};
});

const Category = () => {
	const { category } = useSelector((state) => state.category);

	return (
		<PageWrapper
			title={"Explore 25+ [Category Name] AI Tools"}
			description={
				"Explore 25+ [Category Name] AI Tools on Everything AI. Browse AI tools in 70+ categories and subcategories like marketing, sales, content writing, coding, etc."
			}
		>
			{category && <CategoryComponent category={category} />}
		</PageWrapper>
	);
};

export default Category;
