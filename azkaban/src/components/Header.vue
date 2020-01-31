<template>
  <div class="container">
    <img src="../assets/magic.jpg" style="max-width: 200px" />
    <input type="text" placeholder="Type your search" v-model="search"/>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      search: ""
    }
  },
  watch: {
    search(value) {
      this.$emit('search-text', value)
    }
  }
};
</script>

<style>
input[type="text"],
select {
  width: 500px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}


</style>