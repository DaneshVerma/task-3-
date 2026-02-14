import { useWishlist } from "../context/WishlistContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, moveToCart } = useWishlist();

  return (
    <div className="section">
      <h3>Wishlist</h3>

      {wishlist.map(item => (
        <div key={item.id} className="wishlist-item">
          <div>
            {item.name} - ₹{item.price}
          </div>

          <div className="button-group">
            <button className="btn btn-primary" onClick={() => moveToCart(item)}>
              Move to Cart
            </button>

            <button className="btn btn-danger" onClick={() => removeFromWishlist(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
