import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { useCart } from '../../context/CartContext';

const Products = () => {    
  const { products } = useContext(ProductContext);
  const { addToCart } = useCart();

  if (!products.length) return <p>Loading products...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products?.map((product) => (
        <div key={product.id} className="border p-4 rounded">
          <img src={product.imgurl} alt={product.title} className="mb-2" />
          <h2 className="font-bold">{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>Discount: {product.discountPercentage}%</p>
          <p>{product.description}</p>
          <button onClick={() => addToCart(product)} className="bg-blue-500 text-white p-2 rounded">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
