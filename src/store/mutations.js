export const SET_PRODUCTS = (state, products) => {
  state.products = products;
}

export const ADD_PRODUCT_TO_CART = (state, { id, title, price, count }) => {
  let productInCart = state.order.find(product => {
    return product.id === id;
  })
  if(productInCart) {
    productInCart.count += count;
    return;
  }
  state.order.push({ id, title, price, count });
}

export const REMOVE_PRODUCT_FROM_CART = (state, id) => {
  state.order = state.order.filter(product => {
    return product.id !== id;
  })
}