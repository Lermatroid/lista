import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { Fragment } from "react";
import { classNames } from "@/utils/helpers";

interface SortOption {
	id: string;
	label: string;
}

interface SortProps {
	options: SortOption[];
}

const Sort = ({ options }: SortProps) => {
	return (
		<>
			<Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
				Sort
				<BiChevronDown
					className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
					aria-hidden="true"
				/>
			</Menu.Button>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="origin-top-left absolute left-0 z-10 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						{options.map((option) => (
							<Menu.Item key={option.id}>
								{({ active }) => (
									<a
										className={classNames(
											active ? "bg-gray-100" : "",
											"block px-4 py-2 text-sm font-medium text-gray-900"
										)}
									>
										{option.label}
									</a>
								)}
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</>
	);
};
export default Sort;
