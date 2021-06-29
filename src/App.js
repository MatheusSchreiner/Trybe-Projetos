import React from 'react';

import { StarwarsProvider } from './context/StarwarsProvider';
import Table from './pages/Table';

function App() {
  return (
    <StarwarsProvider>
      <Table />
    </StarwarsProvider>
  );
}

export default App;
