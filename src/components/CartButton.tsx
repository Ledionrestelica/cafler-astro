import { useEffect, useState } from "react";
import {
  addCartItem,
  isCartOpen,
  isItemInCart,
  removeCartItem,
  getProductQuantity,
  cartItems,
} from "../shared/cart";

interface CartProps {
  id: string;
  title: string;
  price: number;
  image: string;
}

const CartButton = ({ id, title, price, image }: CartProps) => {
  const [count, setCount] = useState(0);
  const [inCart, setInCart] = useState(false);

  const hardcodedItemInfo = {
    id: id,
    title: title,
    price: price,
    imageSrc: image,
  };

  // Function to add item to cart
  function addToCart(e: React.FormEvent) {
    e.preventDefault();
    isCartOpen.set(true);
    addCartItem(hardcodedItemInfo);
  }

  // Function to remove item from cart
  function handleRemoveCart(e: React.MouseEvent) {
    e.preventDefault();
    removeCartItem(id);
  }

  // Update state based on cart contents whenever the component mounts or the cart changes
  useEffect(() => {
    // Initialize count and inCart states based on cart contents
    setCount(getProductQuantity(id));
    setInCart(isItemInCart(id));

    // Listen for cart updates to update UI immediately
    const unsubscribe = cartItems.listen(() => {
      setCount(getProductQuantity(id));
      setInCart(isItemInCart(id));
    });

    // Clean up listener on component unmount
    return unsubscribe;
  }, [id]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-center">
        {/* Quantity Control */}
        <div className="flex border h-full min-w-[100px] border-stroke items-center justify-around">
          <button onClick={() => handleRemoveCart} className="text-lg">
            -
          </button>
          <span>{count}</span>
          <button onClick={() => addToCart} className="text-lg">
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <form className="w-full" onSubmit={addToCart}>
          {inCart ? (
            <button
              onClick={handleRemoveCart}
              className="bg-[var(--color-blue-500)] extrabold text-[16px] flex-1 w-full py-3 text-white"
            >
              REMOVE FROM CART
            </button>
          ) : (
            <button className="bg-[var(--color-blue-500)] extrabold text-[16px] flex-1 w-full py-3 text-white">
              ADD TO CART
            </button>
          )}
        </form>
      </div>

      {/* Buy It Now Button */}
      <div className="flex flex-col justify-center gap-3">
        <button className="bg-transparent hover:bg-black hover:text-white transition-all duration-200 border border-black text-black extrabold text-[16px] w-full py-3">
          BUY IT NOW
        </button>

        {/* Decorative Divider */}
        <svg
          width="311"
          className="mx-auto"
          height="24"
          viewBox="0 0 311 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG paths here for styling */}
        </svg>
      </div>
    </div>
  );
};

export default CartButton;
