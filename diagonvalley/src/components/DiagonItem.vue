<template>
  <div>
    Title: {{productValley.title}}
    Quantity: {{productValley.quantity}}
    Price: {{productValley.price}}
    <button
      @click="addProduct(indexValley)"
    >Add product</button>
    <button @click="removeProduct(indexValley)">Remove product</button>
    <button @click="removeAll(indexValley)">Remove all</button>
  </div>
</template>

<script>
export default {
    name: "DiagonItem",
    props: {
        productValley: {
            required: true,
            type: Object
        },
        indexValley: {
            required: true,
            type: Number,
        }
    },
    methods: {
        addProduct(index) {
            this.$store.dispatch("addProduct", index)
        },
        removeProduct(index){
            this.$store.dispatch("removeProduct", index)
        },
        removeAll(index) {
            this.$store.dispatch("removeAll", index)
        }
    }
};
</script>

<style>
</style>