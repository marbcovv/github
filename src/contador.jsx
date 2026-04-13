import { useState, useEffect } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Si el valor es mayor a 10, alerta y restablece
    if (count > 10) {
      alert("¡Límite alcanzado! El valor máximo es 10.");
      setCount(10);
    }
    // Si el valor es menor a 0, mantiene en 0
    if (count < 0) {
      setCount(0);
    }
  }, [count]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', border: '1px solid #555', padding: '20px', borderRadius: '10px' }}>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Incrementar
      </button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px', padding: '10px 20px', cursor: 'pointer' }}>
        Decrementar
      </button>
    </div>
  );
};

export default Contador;