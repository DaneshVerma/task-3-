import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    total
  } = useCart();

  return (
    <div className="section">
      <h3>Cart</h3>

      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <div>
            {item.name} - ₹{item.price}
          </div>

          <div className="qty-controls">
            <button className="btn btn-secondary" onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.qty}</span>
            <button className="btn btn-secondary" onClick={() => increaseQty(item.id)}>+</button>
            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <div className="total-box">Total: ₹{total}</div>

      {total > 20000 && (
        <div className="free-ship">🎉 You unlocked free shipping!</div>
      )}
    </div>
  );
}
