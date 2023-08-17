import { wrapper } from "@/redux/redux-store";
import { getSession } from "next-auth/react";
import { adminGetAllToolsServerSide } from "@/redux/actions/toolActions";
import PageWrapper from "@/layout/PageWrapper";
import AllTools from "@/components/Admin/AllTools";
import { useSelector } from "react-redux";

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query }) => {
	const session = await getSession({ req: req });

	if (!session || session.user.role !== "admin") {
		return {
			redirect: {
				destination: "/?login",
				permanent: false,
			},
		};
	}

	await store.dispatch(adminGetAllToolsServerSide(req));

	return {
		props: { session },
	};
});

export default function Tools() {
	const { tools, toolsCount, error, loading, resultsPerPage, filteredToolsCount } = useSelector((state) => state.adminAllTools);

	return (
		<PageWrapper>
			<div className="w-full flex flex-col items-center justify-center">
				<h1 className="text-6xl font-bold text-center tracking-[-1px] text-gradient-primary-tr">All Tools</h1>
				<AllTools
					tools={tools}
					toolsCount={toolsCount}
					error={error}
					loading={loading}
					resultsPerPage={resultsPerPage}
					filteredToolsCount={filteredToolsCount}
				/>
			</div>
		</PageWrapper>
	);
}
