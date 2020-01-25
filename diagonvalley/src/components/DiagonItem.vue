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
        addProduct(id){
        this.$emit("add-product", id)
    },
    removeProduct(id){
        this.$emit("remove-product", id)
    },
    removeAll(id){
        this.$emit("remove-all", id)
    }
    }
};
</script>

<style>
</style>