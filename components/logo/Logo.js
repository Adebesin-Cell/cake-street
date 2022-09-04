import Image from 'next/image';
import logo from '../../assets/images/logo_coffe.svg';

// Cake street Logo
const Logo = function () {
  return <Image src={logo} alt='Cafe Street Logo' />;
};

export default Logo;
