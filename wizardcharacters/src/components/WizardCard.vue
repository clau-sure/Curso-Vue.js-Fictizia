<template>
  <div class="card">
    <img :src="`${wizard.image}`" style="max-width: 250px; height: 350px" />
    <div>
      <div class="container">
        <h4>{{wizard.name}}</h4>
        <p>House: {{wizard.house}}</p>
          <router-link class="button"
          :to="`/wizard/${ wizard.name }`">View more</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WizardCard",
  props: {
    wizard: {
      type: Object
    }
  }
};
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 250px;
  margin: 5px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  display: inline-block;
  float: left;
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

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>