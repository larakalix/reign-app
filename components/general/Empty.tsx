interface Props {
    message: string;
}

const Empty = ({ message }: Props) => {
    return (
        <div className="flex justify-center items-center my-10">
            <div className="flex justify-center items-center h-60 w-4/5 md:w-3/4 bg-white text-red-600 border border-red-200 font-semibold rounded-md">
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Empty
