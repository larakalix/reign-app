import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Board from "../components/Board";

const Index = () => {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>News App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header title="Hacker News" />

      <Board />
    </div>
  );
};

export default Index;
