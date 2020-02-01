<template>
  <div>
    <h3>Add new wizard</h3>
    <form>
      <input type="text" v-model="name" placeholder="Name of the wizard" />
      <br />
      <input type="text" v-model="price" placeholder="Reward" />
      <br />
      <input type="text" v-model="image" placeholder="Photo Url" />
    </form>
    <button class="button" @click.prevent="submitWizard">Add new wizard</button>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      name: "",
      price: 0,
      image: ""
    }
  },
    methods: {
    submitWizard() {
      this.$emit('new-wizard', {name: this.name, price: this.price, image: this.image, wanted: true})
    }
  }
}
</script>

<style>
.button {
  background-color: black;
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 5px;
  cursor: pointer;
}
</style>