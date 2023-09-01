import React from 'react';
import Table from './Table';

const data = [
  { id: 1, name: 'John Doe', age: 25, country: 'USA' },
  { id: 2, name: 'Jane Smith', age: 30, country: 'Canada' },
  // ...
];

const columns = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'age', label: 'Age', sortable: true },
  { key: 'country', label: 'Country' },
];

const App: React.FC = () => {
  return (
    <Table data={data} columns={columns} pageSize={10} />
  );
};

export default App;