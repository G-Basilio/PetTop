import Logo from "../../assets/logo-white.png";
import LogoWhite from '../../assets/logo.png';

import './styles.css';

const Header = ({ whiteVersion }) => {


  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  }


  return (
    <div className="col-12">
    <header className="py-4px text-center">
      <img src={ whiteVersion ?LogoWhite : Logo } className="img-fluid" />
    </header>
    <button 
    onClick={() => openDrawer}
    className="btn btn-secondary cart-button"
    >
      <spam className="mdi mdi-cart"></spam> 2 ítens
      </button>
    </div>
  );
};

export default Header;
