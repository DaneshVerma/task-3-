import { products } from "../data";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductList() {
  const { addToCart, cartItems } = useCart();
  const { addToWishlist, wishlist } = useWishlist();

  return (
    <div className="section">
      <h3>Products</h3>

      <div className="card-grid">
        {products.map(product => {
          const inCart = cartItems.find(item => item.id === product.id);
          const inWishlist = wishlist.find(item => item.id === product.id);

          return (
            <div key={product.id} className="card">
              <h4>{product.name}</h4>
              <div className="price">₹{product.price}</div>

              <div className="button-group">
                <button
                  className="btn btn-primary"
                  disabled={inCart}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>

                <button
                  className="btn btn-secondary"
                  disabled={inWishlist}
                  onClick={() => addToWishlist(product)}
                >
                  Wishlist
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
