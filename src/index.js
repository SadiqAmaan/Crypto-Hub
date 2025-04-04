import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider, theme} from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export const server = 'https://api.coingecko.com/api/v3'