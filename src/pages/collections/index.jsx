import PageWrapper from "@/layout/PageWrapper";
import AllCollections from "@/components/Collections/AllCollections";

export default function Collections() {
	return (
		<PageWrapper
			title={"All Collections | Everything AI"}
			description={"Discover 20+ AI tool collections tailored for various use cases and learn how to use them together on Everything AI."}
		>
			<AllCollections />
		</PageWrapper>
	);
}
