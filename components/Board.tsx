import React, { useState } from "react";
import { Tab, TabPanel } from "@/interfaces/data";
import News from "./news/News";
import Favs from "./favs/Favs";

const tabs: Tab[] = [
  { id: '122b0f6e-4dec-4d19-9c4a-7cfb145c0444', label: "All", panel: TabPanel.News },
  { id: '122b0f6e-4dec-4d19-9c4a-7cfb145c0333', label: "My faves", panel: TabPanel.Favs },
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
