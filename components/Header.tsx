interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <div className="w-full flex items-center justify-between shadow-sm border-b p-5">
      <h1 className="text-gray-600 font-serif uppercase text-lg">{title}</h1>
    </div>
  );
};

export default Header;
