import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className=" h-[50px] flex justify-between px-5 bg-gray-500 text-white items-center">
      {' '}
      <span className=" font-bold">React + TS</span>
      <span>
        <Link to="/" className=" mr-2">
          Products
        </Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  );
};
export default Navigation;
