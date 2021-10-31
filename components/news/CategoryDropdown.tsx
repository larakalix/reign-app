import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Category } from "@/interfaces/data";

const categories: Category[] = [
    {
        id: '122b0f6e-4dec-4d19-9c4a-7cfb145c06f0',
        label: 'Reactjs',
        icon: null,
    },
    {
        id: '9f4e5830-8c65-48f4-b539-f8ca7ced700d',
        label: 'Angular',
        icon: null,
    },
    {
        id: 'acd7c901-8292-41ae-80e8-8c158a309988',
        label: 'Vuejs',
        icon: null,
    },
];

interface Props {
    selected: string;
    setSelected: Function;
}

const CategoryDropdown = ({ selected, setSelected }: Props) => {
    const [show, setShow] = useState(false);

    return (
        <div className="relative">
            <button className="flex items-center justify-between border border-gray-300 py-1 px-4 bg-white w-48 rounded-sm text-sm" onClick={() => setShow(!show)}>
                Select your news
                <ChevronDownIcon className="mx-2 w-3 h-3" />
            </button>

            <div className={`${show ? '' : 'hidden'} absolute z-50 left-0 w-48 py-2 mt-2 bg-white border border-gray-300 rounded-sm shadow-xl`}>
                {
                    categories.map(({ id, label }) => (
                        <a key={id} href="#" className={`block px-4 py-2 text-sm
                            ${selected === label ? 'text-blue-700 font-medium' : 'text-gray-600'} hover:text-gray-800`}
                            onClick={() => {
                                setSelected(label);
                                setShow(false);
                            }}>
                            {label}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryDropdown
