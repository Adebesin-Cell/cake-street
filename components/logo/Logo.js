import Image from 'next/image';
import logo from '../../assets/images/logo_coffe.svg';

const Logo = function () {
  return <Image src={logo} alt='Cafe Street Logo' />;
};

export default Logo;
