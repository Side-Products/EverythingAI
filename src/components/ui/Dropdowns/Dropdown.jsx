import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ selectedValue, setSelectedValue, placeholder, type, options }) {
	const handleOptionSelection = (item) => {
		setSelectedValue({ type, _id: item._id, name: item.name });
	};

	const menuItemsArr = options?.map((item, idx) => {
		return (
			<Menu.Item key={"i" + idx}>
				{({ active }) => (
					<a
						className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm cursor-pointer")}
						onClick={() => handleOptionSelection(item)}
					>
						{item.name}
					</a>
				)}
			</Menu.Item>
		);
	});

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex w-full min-w-[125px] text-primary-500 font-semibold justify-center gap-x-1.5 pl-3 text-sm">
					<span className="max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">{selectedValue ?? placeholder}</span>
					<ChevronDownIcon className="w-5 h-5 ml-auto -mr-1" aria-hidden="true" />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute z-10 w-56 mt-3 origin-top-right bg-white rounded-md shadow-lg focus:outline-none">
					<div className="py-1 max-h-[200px] overflow-y-auto">
						{menuItemsArr &&
							menuItemsArr.length > 0 && [
								placeholder !== "Sort By" && (
									<Menu.Item key={"i" + "-1"}>
										{({ active }) => (
											<a
												className={classNames("bg-light-100 hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm cursor-pointer")}
												onClick={() => handleOptionSelection({ _id: null, name: null })}
											>
												{placeholder}
											</a>
										)}
									</Menu.Item>
								),
								...menuItemsArr,
							]}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
