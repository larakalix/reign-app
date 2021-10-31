interface Props {
    message: string;
    state: | 'loading' | 'error'
}

const Empty = ({ message, state }: Props) => {

    const getState = (style: string) => {
        switch (style) {
            case 'loading': return 'text-blue-600 border-blue-200';
            case 'error': return 'text-red-600 border-red-200';
            default:
                return 'text-yellow-600 border-yellow-200';
        }
    }

    return (
        <div className="flex justify-center items-center my-10">
            <div className={`flex justify-center items-center h-60 w-4/5 md:w-3/4 bg-white border
            ${getState(state)} font-semibold rounded-md`}>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Empty
