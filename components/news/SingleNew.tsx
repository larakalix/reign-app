import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Hit } from "../../interfaces/news";
import SingleNewContent from './SingleNewContent';

interface Props {
  hit: Hit;
}

const SingleNew = ({ hit }: Props) => {

  const [fav, setFav] = useState(false);
  const { objectID, author, created_at, story_title, story_url, url } = hit;

  const classRef = useRef("relative flex flex-col items-start w-full p-4 border-2 rounded-md overflow-hidden");

  return (
    (story_url || url)
      ? (
        <Link href={story_url ? story_url! : url!}>
          <a target="_blank" className={`${classRef.current} hover:cursor-pointer hover:`}>
            <SingleNewContent key={objectID} {...{ author, created_at, story_title, fav }} />
          </a>
        </Link>
      )
      : (
        <div className={`${classRef.current} hover:cursor-not-allowed`}>
          <SingleNewContent key={objectID} {...{ author, created_at, story_title, fav }} />
        </div>
      )
  );
};

export default SingleNew;
