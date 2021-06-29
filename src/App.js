import React from 'react';

import { StarwarsProvider } from './context/StarwarsProvider';
import Table from './pages/Table';
import FormSearch from './pages/FormSearch';

function App() {
  return (
    <StarwarsProvider>
      <FormSearch />
      <Table />
    </StarwarsProvider>
  );
}

export default App;
