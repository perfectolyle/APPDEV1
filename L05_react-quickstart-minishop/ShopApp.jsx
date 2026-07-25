import { useState } from 'react';

const products = [
  { id: 1, title: 'Cabbage', price: 1.5, isFruit: false, popular: false },
  { id: 2, title: 'Garlic', price: 2.0, isFruit: false, popular: true },
  { id: 3, title: 'Apple', price: 3.25, isFruit: true, popular: true },
  { id: 4, title: 'Mango', price: 4.0, isFruit: true, popular: false },
];

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>

      <p style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}>
        ${product.price.toFixed(2)}
      </p>

      {product.popular && <span>⭐ Popular</span>}

      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default function ShopApp() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount(cartCount + 1);
  }

  function handleRemoveOne() {
    setCartCount(cartCount > 0 ? cartCount - 1 : 0);
  }

  return (
    <div className="shop">
      <h1>Mini Fruit & Veg Stand</h1>

      <p>
        {cartCount === 0 ? 'Cart is empty' : `${cartCount} items in cart`}

        {cartCount > 0 && (
          <button onClick={handleRemoveOne} style={{ marginLeft: '0.75rem' }}>
            Remove one
          </button>
        )}
      </p>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
