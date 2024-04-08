const InfoTip = ({ classes }) => {
	return (
		// <label className={"flex justify-center items-center text-center w-[14px] h-[14px] border rounded-full " + classes}>
		// 	<i className="fa-solid fa-info ml-[5px]"></i>
		// </label>
		<i className={"fa-solid fa-circle-info ml-[5px] " + (classes ?? "")}></i>
	);
};

export default InfoTip;
