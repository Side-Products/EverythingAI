import { wrapper } from "@/redux/redux-store";
import { getSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { getGenAIPartner } from "@/redux/actions/genAIPartnerActions";
import PageWrapper from "@/layout/PageWrapper";
import GenAIPartnerForm from "@/components/GenAIPartnerForm";

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

	await store.dispatch(getGenAIPartner(req, query.id));

	return {
		props: { session },
	};
});

export default function Tools() {
	const { genAIPartner } = useSelector((state) => state.genAIPartner);

	return (
		<PageWrapper>
			<div className="w-full flex flex-col items-center justify-center">
				<h1 className="text-6xl font-bold text-center tracking-[-1px] text-gradient-primary-tr">Edit Partner</h1>
				<GenAIPartnerForm partnerDataToEdit={genAIPartner} />
			</div>
		</PageWrapper>
	);
}
