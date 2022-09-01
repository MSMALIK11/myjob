import {render} from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

// 👇️ wrap component that uses useLocation in Router

test('renders react component', async () => {
  render(
 
      <App />
   
  );

  // your tests...
});