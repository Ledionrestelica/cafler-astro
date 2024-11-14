import { atom, map, onMount } from "nanostores";

export const isCartOpen = atom<boolean>(false);

export type CartItem = {
  id: string;
  title: string;
  imageSrc: string;
  price: number; // Price per unit
  quantity: number;
  totalPrice: number; // Total price based on quantity
};

export const cartItems = map<Record<string, CartItem>>({});

// Load cart items from localStorage in the browser only
onMount(cartItems, () => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      cartItems.set(JSON.parse(storedCart));
    }

    // Save updates to cart items in localStorage
    cartItems.listen((value) => {
      localStorage.setItem("cartItems", JSON.stringify(value));
    });
  }
});

type ItemDisplayInfo = Pick<CartItem, "id" | "title" | "price" | "imageSrc">;

// Function to add or update items in the cart
export function addCartItem({ id, title, price, imageSrc }: ItemDisplayInfo) {
  const existingEntry = cartItems.get()[id];

  if (existingEntry) {
    // Increase quantity and update total price
    const newQuantity = existingEntry.quantity + 1;
    cartItems.setKey(id, {
      ...existingEntry,
      quantity: newQuantity,
      totalPrice: price * newQuantity, // Update total price
    });
  } else {
    // Add new item with initial quantity of 1 and initial total price
    cartItems.setKey(id, {
      id,
      title,
      imageSrc,
      price,
      quantity: 1,
      totalPrice: price,
    });
  }
}

// Function to check if an item is in the cart
export function isItemInCart(itemId: string): boolean {
  return !!cartItems.get()[itemId];
}

// Function to update the quantity of an item
export function updateItemQuantity(itemId: string, increment: number) {
  const existingEntry = cartItems.get()[itemId];
  if (!existingEntry) return; // Item not in cart

  const newQuantity = existingEntry.quantity + increment;

  if (newQuantity > 0) {
    // Update item quantity and total price
    cartItems.setKey(itemId, {
      ...existingEntry,
      quantity: newQuantity,
      totalPrice: existingEntry.price * newQuantity,
    });
  } else {
    // Remove item from cart if quantity reaches zero
    removeCartItem(itemId);
  }
}

// Function to remove an item from the cart entirely
export function removeCartItem(itemId: string) {
  const updatedCartItems = { ...cartItems.get() };
  delete updatedCartItems[itemId];
  cartItems.set(updatedCartItems); // Set the cart with the item removed
}

// Function to get the quantity of a specific product in the cart
export function getProductQuantity(itemId: string): number {
  const item = cartItems.get()[itemId];
  return item ? item.quantity : 0; // Return 0 if the item isn't in the cart
}
