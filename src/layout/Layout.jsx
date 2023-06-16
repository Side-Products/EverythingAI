import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { LoadingContext } from "@/store/LoadingContextProvider";
import ErrorBox from "@/components/ui/Toast/ErrorBox";
import SuccessBox from "@/components/ui/Toast/SuccessBox";
import Loading from "@/components/ui/Loading";

const Layout = ({ children }) => {
	const { setLoading } = useContext(LoadingContext);

	const router = useRouter();
	// Loading on page change
	useEffect(() => {
		if (router && router.events) {
			router.events.on("routeChangeStart", () => setLoading((prevState) => ({ ...prevState, status: true })));
			router.events.on("routeChangeComplete", () => setLoading((prevState) => ({ ...prevState, status: false })));
			router.events.on("routeChangeError", () => setLoading((prevState) => ({ ...prevState, status: false })));
		}
	}, [router.events, setLoading]);

	return (
		<>
			<Navbar />
			{children}
			<Loading />
			<ErrorBox style={3} />
			<SuccessBox style={3} />
			{router.pathname !== "/404" && router.pathname !== "/_offline" && <Footer />}
		</>
	);
};

export default Layout;
