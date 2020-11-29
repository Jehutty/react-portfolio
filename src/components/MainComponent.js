import { Box, Img, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import reactlogo from '../logo.svg';

export const MainComponent = () => {
  return (
    <>
      <Box h={'100vh'} bg={'blue.800'}>
        <Heading>
          Welcome to my React
          <Img display={'inline'} src={reactlogo} className="App-logo"></Img>
          portfolio
        </Heading>
      </Box>
    </>
  );
};
