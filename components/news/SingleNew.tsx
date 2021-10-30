import React, { useRef } from 'react';
import Link from 'next/link';
import { Hit } from '@/interfaces/news';
import SingleNewContent from './SingleNewContent';

interface Props {
  hit: Hit;
}

const SingleNew = ({ hit }: Props) => {

  const { objectID, story_url, url } = hit;

  const classRef = useRef("relative z-20 flex flex-col items-start w-full p-4 border-2 rounded-md overflow-hidden");

  return (
    (story_url || url)
      ? (
        <Link href={story_url ? story_url! : url!}>
          <a target="_blank" className={`${classRef.current} hover:cursor-pointer hover:`}>
            <SingleNewContent key={objectID} {...{ hit }} />
          </a>
        </Link>
      )
      : (
        <div className={`${classRef.current} hover:cursor-not-allowed`}>
          <SingleNewContent key={objectID} {...{ hit }} />
        </div>
      )
  );
};

export default SingleNew;
