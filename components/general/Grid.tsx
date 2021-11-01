import { ReactNode } from "react"

interface Props {
    children: ReactNode;
}

const Grid = ({ children }: Props) => {
    return (
        <div className="grid gap-4 mt-10 p-0 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            {children}
        </div>
    )
}

export default Grid
