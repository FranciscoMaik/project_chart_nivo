import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { ChartLine } from './components/ChartLine'

function App() {
  return (
    <ChakraProvider>
      <ChartLine />
    </ChakraProvider>
  );
}

export default App;
