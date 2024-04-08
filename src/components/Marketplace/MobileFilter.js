import { Fragment } from "react";
import { Transition } from "@headlessui/react";

export default function MobileFilterModal({ showMobileFilter, setShowMobileFilter, children }) {
	return (
		<Transition show={showMobileFilter}>
			<Transition.Child
				as={Fragment}
				enter="transition-all ease-in duration-200"
				enterFrom="opacity-0 translate-y-full"
				enterTo="opacity-100"
				leave="transition-all ease-out duration-300"
				leaveFrom="opacity-100"
				leaveTo="opacity-0 translate-y-full"
			>
				<div className="z-[500] fixed -ml-6 top-0 w-screen h-screen p-10 lg:pb-12 pb-0 backdrop-blur-[140px] backdrop-brightness-200">
					<div className="flex justify-between w-full">
						<h3 className="text-2xl font-semibold md:text-3xl font-primary text-primary-400">MARKETPLACE FILTERS</h3>
						<div
							onClick={() => setShowMobileFilter(false)}
							className="flex items-center self-end justify-center w-8 h-8 mb-3 transition-all duration-200 rounded-lg cursor-pointer hover:bg-zinc-500/20 "
						>
							<i className="fa-solid fa-xmark"></i>
						</div>
					</div>

					<div className="flex flex-wrap mt-10">{children}</div>
				</div>
			</Transition.Child>
		</Transition>
	);
}
