import { useContext, useEffect, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "@/redux/actions/likedToolActions";
import { StatusContext } from "@/store/StatusContextProvider";
import { LoadingContext } from "@/store/LoadingContextProvider";

const defaultContext = {};
export const ToolContext = createContext(defaultContext);

function ToolContextProvider({ children }) {
	const { setSuccess, setError } = useContext(StatusContext);
	const { setLoading } = useContext(LoadingContext);
	const dispatch = useDispatch();

	const { error: createLikedToolError, success, likedTool } = useSelector((state) => state.createLikedTool);
	const { error: deleteLikedToolError, isDeleted } = useSelector((state) => state.deleteLikedTool);
	useEffect(() => {
		if (success && likedTool) {
			setLoading({ status: false });
			setSuccess({
				title: "Success",
				message: "Tool added to your liked tools",
				showSuccessBox: true,
			});
			dispatch(clearErrors());
		}
	}, [success, likedTool]);

	useEffect(() => {
		if (isDeleted) {
			setLoading({ status: false });
			setSuccess({
				title: "Success",
				message: "Tool removed from your liked tools",
				showSuccessBox: true,
			});
			dispatch(clearErrors());
		}
	}, [isDeleted]);

	useEffect(() => {
		if (createLikedToolError) {
			setLoading({ status: false });
			setError({
				title: "Something went wrong",
				message: createLikedToolError,
				showErrorBox: true,
			});
			dispatch(clearErrors());
		}
		if (deleteLikedToolError) {
			setLoading({ status: false });
			setError({
				title: "Something went wrong",
				message: deleteLikedToolError,
				showErrorBox: true,
			});
			dispatch(clearErrors());
		}
	}, [createLikedToolError, deleteLikedToolError]);

	return <ToolContext.Provider value={{}}>{children}</ToolContext.Provider>;
}

export default ToolContextProvider;
