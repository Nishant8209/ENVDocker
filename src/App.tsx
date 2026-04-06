
import { useEffect, useState } from 'react';
import './App.css'
const app = import.meta.env.VITE_APP;
function App() {
  interface Product {
    _id: string;
    title: string;
  }

  interface ApiData {
    products?: Product[];
  }

  const [data, setData] = useState<ApiData | null>(null);
  const AuthUrl = import.meta.env.VITE_AUTH_URL;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${AuthUrl}/product`, {
        method: 'GET', headers: { "Content-Type": "application/json" },
        credentials: "include"
      })

      const result = await response.json();
      setData(result.data);

    }
    fetchData();
  }, [])

  return (
    <>
      <div>{app}</div>
      {AuthUrl}
      {data?.products?.map((product) => (<div key={product._id}>{product.title}</div>))}
    </>
  )
}

export default App
