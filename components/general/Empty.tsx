import { ReactNode } from "react";

interface Props {
    message: string;
    state: | 'loading' | 'error' | 'success',
    children?: ReactNode;
}

const Empty = ({ children, message, state }: Props) => {

    // Define empty box message style depending on state style property
    const getState = (style: string) => {
        switch (style) {
            case 'loading': return 'text-blue-600 border-blue-200';
            case 'error': return 'text-red-600 border-red-200';
            case 'success': return 'text-green-600 border-green-200';
            default:
                return 'text-yellow-600 border-yellow-200';
        }
    }

    return (
        <div className="flex justify-center items-center my-10">
            <div className={`flex flex-col justify-center items-center h-60 w-4/5 md:w-3/4 bg-white border-2
                ${getState(state)} font-semibold rounded-md`}>
                <p>{message}</p>
                {children}
            </div>
        </div>
    )
}

export default Empty
