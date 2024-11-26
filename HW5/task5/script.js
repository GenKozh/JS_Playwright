function updateCart(cart, newItem) {
  const updatedCart = [...cart];
  const existingItemIndex = updatedCart.findIndex(item => item.id === newItem.id);

  if (existingItemIndex !== -1) {
    updatedCart[existingItemIndex] = {
      ...updatedCart[existingItemIndex],
      quantity: updatedCart[existingItemIndex].quantity + newItem.quantity
    };
  } else {
    updatedCart.push(newItem);
  }

  return updatedCart;
}

const cart = [
  { id: 1, name: "Laptop", price: 1200, quantity: 1 },
  { id: 2, name: "Smartphone", price: 800, quantity: 2 },
];

console.log(
  updateCart(cart, { id: 2, name: "Smartphone", price: 800, quantity: 1 })
);

console.log(
  updateCart(cart, { id: 3, name: "Tablet", price: 600, quantity: 1 })
);
