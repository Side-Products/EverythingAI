import { wrapper } from "@/redux/redux-store";
import { getSession } from "next-auth/react";
import { adminGetAllGenAIPartnersServerSide } from "@/redux/actions/genAIPartnerActions";
import PageWrapper from "@/layout/PageWrapper";
import AllGenAIPartners from "@/components/Admin/AllGenAIPartners";
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

	await store.dispatch(adminGetAllGenAIPartnersServerSide(req));

	return {
		props: { session },
	};
});

export default function GenAIPartners() {
	const { genAIPartners, genAIPartnersCount, error, loading, filteredGenAIPartnersCount, resultsPerPage } = useSelector(
		(state) => state.adminAllGenAIPartners
	);

	return (
		<PageWrapper>
			<div className="w-full flex flex-col items-center justify-center">
				<h1 className="text-6xl font-bold text-center tracking-[-1px] text-gradient-primary-tr">All Gen AI Partners</h1>
				<AllGenAIPartners
					genAIPartners={genAIPartners}
					genAIPartnersCount={genAIPartnersCount}
					error={error}
					loading={loading}
					resultsPerPage={resultsPerPage}
					filteredGenAIPartnersCount={filteredGenAIPartnersCount}
				/>
			</div>
		</PageWrapper>
	);
}
