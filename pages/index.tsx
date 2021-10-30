import React from "react";
import Header from "../components/header";
import News from "../components/news/news";

const Index = () => {
  return (
    <>
      <Header title="Hacker News" />

      <div className="flex justify-center p-4">
        <News />
      </div>
    </>
  );
};

export default Index;
