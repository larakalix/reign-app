interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <div className="shadow-sm border-b bg-gradient-to-b from-gray-200 to-white">
      <div className="flex flex-col p-8 m-auto md:max-w-5xl lg:max-w-7xl">
        <h1 className="text-gray-600 font-serif uppercase text-3xl">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
