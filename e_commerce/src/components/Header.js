import { Link } from 'react-router-dom';

const Header = () => (
  <header className="p-4 shadow bg-white flex justify-between items-center">
    <Link to="/" className="text-xl font-bold">MyShop</Link>
    <nav>
      <Link to="/cart" className="mx-2">Cart</Link>
      <Link to="/login" className="mx-2">Login</Link>
    </nav>
  </header>
);

export default Header;
