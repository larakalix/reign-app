interface Props {
    message: string;
}

const Empty = ({ message }: Props) => {
    return (
        <div className="h-60 w-full flex bg-white text-red-600 border border-red-200 font-semibold justify-center items-center rounded-md">
            <p>{message}</p>
        </div>
    )
}

export default Empty
