import React, { useState } from "react";
import { Category, Tab, TabPanel } from "@/interfaces/data";
import News from "./News";
import Favs from "./Favs";
import useNews from "@/hooks/useNews";

const tabs: Tab[] = [
  { id: '122b0f6e-4dec-4d19-9c4a-7cfb145c0444', label: "All", panel: TabPanel.News },
  { id: '122b0f6e-4dec-4d19-9c4a-7cfb145c0333', label: "My faves", panel: TabPanel.Favs },
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

const Board = () => {

  const [tab, setTab] = useState(tabs[0]);

  const getTab = (id: string) => (id === tab.id) ? "border-blue-700 text-blue-700 first:border-r" : '';

  const renderNews = () => {
    switch (tab.panel) {
      case TabPanel.Favs: return <Favs />;
      default: return <News />
    }
  }

  return (
    <div className="flex flex-col p-8">
      <div className="flex items-center justify-center mt-4">
        <ul className="inline-flex">
          {tabs.map(({ id, label, panel }) => (
            <li
              key={id}
              className={
                `p-2 w-24 rounded-sm text-center border text-xs font-semibold first:border-r-0 hover:cursor-pointer ${getTab(id)}`}
              onClick={() => setTab({ id, label, panel })}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center mt-4">
        {/* Dropwodn List */}
      </div>
      <>
        {renderNews()}
      </>
    </div>
  );
};

export default Board;
