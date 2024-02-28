import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import { InputProvider } from './context/context.jsx'

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <InputProvider>
    <App />
    </InputProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
