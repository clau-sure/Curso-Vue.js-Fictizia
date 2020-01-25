<template>
  <div>
    <h2>Flourish and Blotts</h2>
    <div>
      <h3>Products</h3>
      <div v-for="(product, index) in productList" :key="index">
      <DiagonItem :productValley="product" :indexValley="index" @add-product="addProduct" @remove-product="removeProduct" @remove-all="removeAll"></DiagonItem>
      </div>
    </div>
    <div>
      <h3>Your carrier</h3>
      <p>Total: {{totalPrice}} galeons</p>
    </div>
  </div>
</template>

<script>
import DiagonItem from "./DiagonItem";

export default {
    components: {
        DiagonItem
    },
  data() {
    return {
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
    };
  },
  computed: {
    totalPrice({ productList }) {
      var totalPrice = "";
      productList.forEach(product => {
        totalPrice += product.quantity * product.price;
      });
      return totalPrice;
    }
  },
  methods: {
    addProduct(value) {
      this.productList[value].quantity++;
    },
    removeProduct(value) {
      if (this.productList[value].quantity > 1) {
        this.productList[value].quantity--;
      } else {
        this.productList.splice(this.productList[value], 1);
      }
    },
    removeAll(value){
        this.productList.splice(this.productList[value], 1);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>