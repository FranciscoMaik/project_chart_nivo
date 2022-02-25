import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { ChartLineRemoveItem } from './components/ChartLineRemoveItem';
import { ChartLineBackground } from './components/ChartLineBackground';

function App() {
  return (
    <ChakraProvider>
      <ChartLineRemoveItem />
      <ChartLineBackground />
    </ChakraProvider>
  );
}

export default App;
