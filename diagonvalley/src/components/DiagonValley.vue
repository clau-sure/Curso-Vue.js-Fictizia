<template>
  <div>
    <h2>Flourish and Blotts</h2>
    <div>
      <h3>Products</h3>
      <div v-for="(product, index) in list" :key="index">
      <DiagonItem :productValley="product" :indexValley="index"></DiagonItem>
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
  computed: {
    list() {
      return this.$store.state.productList;
    },
    totalPrice({ list }) {
      var totalPrice = "";
      list.forEach(product => {
        totalPrice += product.quantity * product.price;
      });
      return totalPrice;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>