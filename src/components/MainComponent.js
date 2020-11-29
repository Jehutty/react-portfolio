import { Box, Img, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import reactlogo from '../logo.svg';

export const MainComponent = () => {
  return (
    <>
      <Box w={'100vh'}>
        <Heading>
          Welcome to my React
          <Img display={'inline'} src={reactlogo} className="App-logo"></Img>
          portfolio
        </Heading>
      </Box>
    </>
  );
};
