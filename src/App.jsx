import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <Navbar />
          <ProductList />
          <Cart />
          <Wishlist />
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
