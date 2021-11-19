export const getProducts = ({ commit }) => {
  fetch('https://random-data-api.com/api/food/random_food?size=30')
    .then(response => response.json())
    .then(data => {
      commit('SET_PRODUCTS', data);
    })
    .catch(error => {
      console.log('Ошибка', error);
    });
}

export const addProductToCart = ({ commit }, { id, title, price, count }) => {
  commit('ADD_PRODUCT_TO_CART', { id, title, price, count });
}

export const removeProductFromCart = ({ commit }, id) => {
  commit('REMOVE_PRODUCT_FROM_CART', id);
}