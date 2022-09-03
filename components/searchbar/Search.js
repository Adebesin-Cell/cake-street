import { Flex, FormLabel } from '@chakra-ui/react';
import Image from 'next/image';
import SearchIcon from '../../assets/images/icon-search.svg';
import FormInput from '../ui/input/Input';

const Search = function () {
  const searchShadow = {
    filter: 'drop-shadow(6px 2px 24px rgba(0, 0, 0, 0.13))',
  };

  return (
    <Flex
      width={240}
      sx={searchShadow}
      py={2.5}
      bg='white'
      borderRadius='35'
      px={3.5}
      height={10}
      alignItems='center'
      mr={6}
    >
      <FormLabel
        display='flex'
        alignItems='center'
        justifyContent='center'
        htmlFor='search'
        m='0'
      >
        <Image
          src={SearchIcon}
          width='19'
          height='19'
          alt='search icon'
        ></Image>
      </FormLabel>
      <FormInput
        pl={3}
        flexGrow={1}
        variant='unstyled'
        placeholder='Cappuccino'
        fontSize={12}
        color='brand.100'
        id='search'
        name='search'
      />
    </Flex>
  );
};

export default Search;
