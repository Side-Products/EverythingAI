import { wrapper } from "@/redux/redux-store";
import { getSession } from "next-auth/react";
import { adminGetAllTools } from "@/redux/actions/toolActions";
import PageWrapper from "@/layout/PageWrapper";
import AllTools from "@/components/Admin/AllTools";

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

	await store.dispatch(adminGetAllTools(req));

	return {
		props: { session },
	};
});

export default function Tools() {
	return (
		<PageWrapper>
			<div className="w-full flex flex-col items-center justify-center">
				<h1 className="text-6xl font-bold text-center tracking-[-1px] text-gradient-primary-tr">All Tools</h1>
				<AllTools />
			</div>
		</PageWrapper>
	);
}
