import './App.css';
import { useEffect, useState } from 'react';

import ProductCard from './components/product/ProductCard';

function App() {
  const [products,updateProducts]=useState([]);

  useEffect(()=>{
    getProducts();
  },[]);

async function getProducts(){
    let data= await fetch('https://fakestoreapi.in/api/products');
    let product=await data.json();
    updateProducts(product.products);
    console.log(product);
}

  return (
    <>
    <div className="productlist">
      {
       products.map((p)=><ProductCard {...p} key={p.id}></ProductCard>)
      }
    </div>
    </>
  );
}

export default App
