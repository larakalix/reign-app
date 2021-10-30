import React from "react"
import { ClockIcon, HeartIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline';
import { calcTime } from "../../helpers/helpers";

interface Props {
    author: string,
    created_at: string;
    story_title: null | string;
    fav: boolean;
}

const SingleNewContent = ({ author, created_at, story_title, fav }: Props) => {
    return (
        <>
            <p className="inline-flex items-center mb-2 w-3/4">
                <ClockIcon className="h-4 w-4 text-gray-700" />
                <span className="ml-2 text-xs lg:text-sm text-gray-500">{calcTime({ date: created_at })} ago by {author}</span>
            </p>
            <p className="text-sm text-gray-600 w-3/4 font-semibold" dangerouslySetInnerHTML={{ __html: story_title! }} />
            <button className="absolute z-50 flex justify-center items-center h-full w-1/5 bg-gray-100 top-0 right-0">
                {
                    fav
                        ? (<HeartIcon className="h-5 w-5 text-red-600" />)
                        : (<HeartIconOutline className="h-5 w-5 text-red-600" />)
                }
            </button>
        </>
    )
}

export default SingleNewContent
