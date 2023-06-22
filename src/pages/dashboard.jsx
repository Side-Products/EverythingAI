import PageWrapper from "@/layout/PageWrapper";
import UserDetails from "@/components/Dashboard/UserDetails";
import { getSession } from "next-auth/react";
import { wrapper } from "@/redux/redux-store";

export const getServerSideProps = wrapper.getServerSideProps(() => async ({ req }) => {
	const session = await getSession({ req: req });
	if (!session) {
		return {
			redirect: {
				destination: "/?login",
				permanent: false,
			},
		};
	}

	// await store.dispatch(getMyIdeas(req, query.page, query.search));

	return {
		props: { session },
	};
});

export default function Dashboard() {
	// const { ideas, resultsPerPage, ideasCount, filteredIdeasCount, error } = useSelector((state) => state.myIdeas);

	return (
		<PageWrapper>
			<UserDetails />
			<div className="w-full flex flex-col mt-20">
				<h1 className="text-6xl font-bold text-center tracking-[-2.5px] text-gradient-primary-tr">Liked Tools</h1>
				{/* <Ideas ideas={ideas} resultsPerPage={resultsPerPage} ideasCount={ideasCount} filteredIdeasCount={filteredIdeasCount} error={error} /> */}
			</div>
		</PageWrapper>
	);
}
