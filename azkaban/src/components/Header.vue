<template>
  <div class="container">
    <img src="../assets/magic.jpg" style="max-width: 200px" />
    <input type="text" placeholder="Type your search" />
    <button class="button">Search</button>
  </div>
</template>

<script>
export default {};
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