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

	return {
		props: { session },
	};
});

export default function Dashboard() {
	return (
		<PageWrapper>
			<UserDetails />
		</PageWrapper>
	);
}
