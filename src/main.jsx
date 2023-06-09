import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';



export const MovieContext = React.createContext();
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>,)
