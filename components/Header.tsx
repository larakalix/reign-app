interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <div className="w-full flex items-center justify-between shadow-sm border-b px-8 py-4 md:px-10 md:py-11 lg:px-36 lg:py-11 bg-gradient-to-b from-gray-200 to-white">
      <h1 className="text-gray-600 font-serif uppercase text-3xl">{title}</h1>
    </div>
  );
};

export default Header;
