import React from 'react'
import './productcard.css'
const ProductCard = ({id,title,image}) => {

  return (
    <>
    <div className="card">
        <img src={image} id="img"></img>
        <p>id:{id}</p>
        <p>title:{title}</p>
    </div>
    </>
  )
}

export default ProductCard