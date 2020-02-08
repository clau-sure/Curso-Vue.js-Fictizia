import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        productList: [
            {
              title: "The Tales of Beedle the Bard",
              quantity: 2,
              price: 15
            },
            {
              title: "A History of Magic by Bathilda Bagshot",
              quantity: 1,
              price: 45
            },
            {
              title: "The Life and Lies of Albus Dumbledore",
              quantity: 5,
              price: 22
            }
          ]
    },
    mutations: {
        addProduct(state, index){
            state.productList[index].quantity++
        },
        removeProduct(state, index){
            if (state.productList[index].quantity > 1) {
                state.productList[index].quantity--;
            }
            else {
                state.productList.splice(state.productList[index], 1)
            }
        },
        removeAll(state, index) {
            state.productList.splice(state.productList[index], 1);
        }
    },
    actions: {
        addProduct(state, index) {
            state.commit("addProduct", index)
        },
        removeProduct(state,index) {
            state.commit("removeProduct", index)
        },
        removeAll(state, index) {
            state.commit("removeAll", index)
        }
    },
    modules: {}
})

