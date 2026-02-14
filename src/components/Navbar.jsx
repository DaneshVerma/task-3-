import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();
  const { toggleTheme } = useTheme();

  return (
    <div className="navbar">
      <div className="nav-left">
        <h2>🛒 Smart Store</h2>
      </div>

      <div className="nav-right">
        <span className="badge">Cart: {cartItems.length}</span>
        <span className="badge">Wishlist: {wishlist.length}</span>
        <button className="theme-btn" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}
