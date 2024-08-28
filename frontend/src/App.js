import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <>
        <h1 key={index}>{item.name}</h1>
        <img style={{width: "100px", height: "100px"}} src={item.image}></img>
        </>
      ))}
    </div>
  );
}

export default App;
