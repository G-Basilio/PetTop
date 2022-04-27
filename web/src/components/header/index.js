import Logo from "../../assets/logo-white.png";
import LogoWhite from '../../assets/logo.png';

const Header = ({ whiteVersion }) => {
  return (
    <div className="col-12">
    <header className="py-4px text-center">
      <img src={ whiteVersion ?LogoWhite : Logo } className="img-fluid" />
    </header>
    </div>
  );
};

export default Header;
