import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Frontend conectado con Backend</h1>
      <p>{data ? data.message : 'Cargando...'}</p>
    </div>
  );
}

export default App;
