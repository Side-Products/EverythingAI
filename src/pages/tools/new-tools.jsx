import PageWrapper from "@/layout/PageWrapper";
import { wrapper } from "@/redux/redux-store";
import { useSelector } from "react-redux";
import { getAllToolsServerSide } from "@/redux/actions/toolActions";
import Marketplace from "@/components/Marketplace";

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
	await store.dispatch(getAllToolsServerSide(req, "new-tools"));

	return {
		props: {},
	};
});

export default function NewTools() {
	const { tools } = useSelector((state) => state.allTools);

	return (
		<PageWrapper useDefaultContainer={false}>
			<Marketplace tools={tools} />
		</PageWrapper>
	);
}
