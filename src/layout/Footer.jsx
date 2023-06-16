import Image from "next/image";
import logo from "../../public/logo.png";

const Footer = () => {
	return (
		<div className="flex justify-center w-full">
			<div className="w-full max-w-[1920px] pt-12 pb-12 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-20 bg-light-100 border-t border-t-light-400">
				<div className="w-full flex justify-between items-center">
					<Image src={logo} alt="logo" width="150" />
					<p className="font-primary sm:text-lg text-base font-medium text-gradient-primary-tr">EverythingAI</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
