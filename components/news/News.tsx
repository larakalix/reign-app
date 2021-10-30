import React, { useState } from "react";
import useNews from "@/hooks/useNews";
import { Category, IGenericComponent } from "@/interfaces/data";
import SingleNew from "./SingleNew";
import Empty from "../general/Empty";

const tabs: IGenericComponent[] = [
  { id: '122b0f6e-4dec-4d19-9c4a-7cfb145c0444', label: "All" },
  { id: '122b0f6e-4dec-4d19-9c4a-7cfb145c0333', label: "My faves" }
];

const categories: Category[] = [
  {
    id: '122b0f6e-4dec-4d19-9c4a-7cfb145c06f0',
    label: 'Angular',
    icon: null,
  },
  {
    id: '9f4e5830-8c65-48f4-b539-f8ca7ced700d',
    label: 'React',
    icon: null,
  },
  {
    id: 'acd7c901-8292-41ae-80e8-8c158a309988',
    label: 'Vue',
    icon: null,
  },
];

const News = () => {

  const { news } = useNews();
  const [tab, setTab] = useState(tabs[0].id);
  const { hits } = news;

  const getTab = (id: string) => (id === tab) ? "border-blue-700 text-blue-700 first:border-r" : '';

  return (
    <div className="flex flex-col p-8">
      <div className="flex items-center justify-center mt-4">
        <ul className="inline-flex">
          {tabs.map(({ id, label }) => (
            <li
              key={id}
              className={
                `p-2 w-24 rounded-sm text-center border text-xs font-semibold first:border-r-0 hover:cursor-pointer ${getTab(id)}`}
              onClick={() => setTab(id)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
      {
        hits?.length > 0 ?
          (
            <div className="grid gap-6 mt-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
              {
                hits.map((hit) => (
                  <SingleNew key={hit.objectID} hit={hit} />
                ))
              }
            </div>
          )
          : <Empty message="No news found" />
      }
    </div>
  );
};

export default News;
