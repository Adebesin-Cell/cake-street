import { Box, Container, Grid } from '@chakra-ui/react';
import SectionTitle from '../ui/title/SectionTitle';

const Services = function () {
  return (
    <Box as='section' pt='5' mb='20'>
      <Container maxW='container.xl' p='0'>
        <SectionTitle text='How to use delivery' subText='service' />
        <Grid templateColumns='repeat(3, 1fr)'></Grid>
      </Container>
    </Box>
  );
};

export default Services;
