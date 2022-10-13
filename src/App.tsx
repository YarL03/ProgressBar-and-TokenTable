import React from 'react';
import Layout from './components/Layout/Layout';
import ProgressBar from './components/ProgressBar/ProgressBar';
import TokenTable from './components/TokenTable/TokenTable';
import { itemsForProgressBar, itemsForTokenTable } from './store/data';
import { onSort } from './utils/tokenTableSort'

function App() {
  return (
      <Layout>
        <ProgressBar items={itemsForProgressBar} />
        <div>______________________________</div>
        <TokenTable onFilter={() => {}} filters={{status: 'green', type: 'TRST'}} 
          headerSorted="-volume" onSort={onSort} items={itemsForTokenTable} onBuy={(item) => {alert(`/project/${item.id}`)}}/>
      </Layout>
  );
}

export default App;
