const tabs = [{ title: "All" }, { title: "Favs" }];

const News = () => {
  return (
    <div className="flex flex-col">
      <ul className="inline-flex">
        {tabs.map(({ title }) => (
          <li key={title} className="p-2 border border-l-0">{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default News;
