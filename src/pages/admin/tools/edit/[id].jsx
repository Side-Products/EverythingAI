import { wrapper } from "@/redux/redux-store";
import { getSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { getTool } from "@/redux/actions/toolActions";
import PageWrapper from "@/layout/PageWrapper";
import SubmitTool from "@/components/SubmitTool";

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

	await store.dispatch(getTool(req, query.id));

	return {
		props: { session },
	};
});

export default function Tools() {
	const { tool } = useSelector((state) => state.tool);

	return (
		<PageWrapper>
			<div className="w-full flex flex-col items-center justify-center">
				<h1 className="text-6xl font-bold text-center tracking-[-1px] text-gradient-primary-tr">Edit Tool</h1>
				<SubmitTool toolToEdit={tool} />
			</div>
		</PageWrapper>
	);
}
