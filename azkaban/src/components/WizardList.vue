<template>
  <div>
    <h1>Death Eaters</h1>
    <div>
      <div class="container" v-for="(deathEater, index) in deathEaters" :key="index">
        <WizardCard :deathEater="deathEater" :index="index" @remove-wizard="removeWizard" @captured-wizard="capturedWizard"></WizardCard>
      </div>
    </div>
  </div>
</template>

<script>
import WizardCard from './WizardCard';

export default {
  name: "WizardList",
  components: {
      WizardCard
  },
  data() {
    return {
      deathEaters: [
        {
          image: require("../assets/bellatrix.jpg"),
          name: "Bellatrix Lestrange",
          price: 3000,
          wanted: true
        },
        {
          image: require("../assets/lucius.jpg"),
          name: "Lucius Malfoy",
          price: 1000,
          wanted: false
        },
        {
          image: require("../assets/narcisa.jpg"),
          name: "Narcisa Malfoy",
          price: 500,
          wanted: true
        },
        {
          image: require("../assets/draco.jpg"),
          name: "Draco Malfoy",
          price: 200,
          wanted: true
        },
        {
          image: require("../assets/greyback.png"),
          name: "Fenrir Greyback",
          price: 4000,
          wanted: true
        }
      ]
    };
  },
    methods: {
    removeWizard(value){
        this.deathEaters.splice(this.deathEaters[value], 1);
    },
    capturedWizard(value){
        this.deathEaters[value].wanted = !this.deathEaters[value].wanted
    }
  }
};
</script>

<style>

.container {
    display: inline-block;
}

</style>