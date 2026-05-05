
import { useEffect, useState } from 'react';
import './App.css'
const app = import.meta.env.VITE_APP;

const AuthUrl = import.meta.env.VITE_AUTH_URL;


export interface IProduct {
  _id: number;
  title: string;

}
function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/api/product', {
        method: 'GET',
        credentials: "include"
      })

      if (!response.ok) {
        const error = new Error('An error occurred while fetching the data.') as Error & { code: number };
        error.code = response.status;
        throw error;
      };

      const result = await response.json();
      setProducts(result.data.products)
    }
    fetchData();
  }, [])

  return (
    <>

      {products.map((product: IProduct) => (<div key={product._id}>{product.title}</div>))}
      <div>{app}</div>
      {AuthUrl}
      <div>
        This is the dev branch code


        This is the feture branch of 0001

      </div>
    </>
  )
}

export default App
