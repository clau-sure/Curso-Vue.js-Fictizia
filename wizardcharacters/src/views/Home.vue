<template>
  <div class="home">
    <div>
      <input type="text" placeholder="Type your search" v-model="search" />
      <button class="button" @click.prevent="searchWizard">Search a wizard</button>
    </div>
    <div v-for="(wizard, index) in wizardList" :key="index">
      <wizard-card :wizard="wizard" />
    </div>
  </div>
</template>

<script>
import WizardCard from "@/components/WizardCard";

export default {
  name: "home",
  components: {
    WizardCard
  },
  data() {
    return {
      wizardList: [],
      search: ""
    };
  },
  created() {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then(response => response.json())
      .then(response => {
        this.wizardList = response;
        localStorage.setItem("wizards", JSON.stringify(response));
      });
  },
  methods: {
    searchWizard() {
      this.wizardList = this.wizardList.filter(wizard =>
      wizard.name.toLowerCase().includes(this.search.toLowerCase()))
      this.$router.push({query: {search: this.search}})
    }
  }

  // this.$route.query.name = this.search;
};
</script>
<style>
input[type="text"],
select {
  width: 500px;
  padding: 12px 20px;
  margin: 8px 0;
  margin-bottom: 30px;
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
