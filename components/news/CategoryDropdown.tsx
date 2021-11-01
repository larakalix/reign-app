import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { categories } from "data/data-categories";

interface Props {
    selected: string;
    setSelected: Function;
}

const CategoryDropdown = ({ selected, setSelected }: Props) => {
    const [show, setShow] = useState(false);

    // Sort hits depending to selected category
    const selectedCategory = (label: string) => {
        setSelected(label);
        setShow(false);
    }

    return (
        <div className="relative">
            <button
                id="category-dp"
                className={`flex items-center justify-between transition-colors border 
                    ${show ? 'border-gray-900' : 'border-gray-300'} py-1 px-4 bg-white w-48 rounded-sm`}
                onClick={() => setShow(!show)}
            >
                <span className="text-sm">Select your news</span>
                <ChevronDownIcon className="mx-2 w-3 h-3" />
            </button>

            <div className={`categories ${show ? '' : 'hidden'} absolute z-50 left-0 w-48 py-2 mt-2 bg-white border border-gray-300 rounded-sm shadow-xl`}>
                {
                    categories.map(({ id, label }) => (
                        <a
                            key={id}
                            href="#"
                            className={`block px-4 py-2 text-sm 
                                ${selected === label ? 'text-blue-500 font-medium' : 'text-gray-600'} hover:text-gray-800`}
                            onClick={() => selectedCategory(label)}
                        >
                            <div className="flex items-center">
                                <div className="w-6 h-6 flex justify-center items-center">
                                    <Image src={`/images/${label}.png`} width={24} height={24} objectFit="contain" loading="lazy" alt={label} />
                                </div>
                                <p className="ml-2">{label}</p>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryDropdown
