import React, { useState } from 'react';
import './App.css';

function App() {
  const initialData = [
    'Lápis',
    'Borracha',
    'Caneta',
    'Marcador',
    'Papel',
    'Sketchbook',
    'Aquarela',
    'Mesa Digitalizadora',
    'Pincel',
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = initialData.filter(item =>
      item.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="App">
      <h1>Materiais de Desenho</h1>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;