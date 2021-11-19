export const totalPrice = (state) => {
  let price = 0;
  state.order.forEach(product => {
    price += product.price * product.count;
  });
  return price;
}