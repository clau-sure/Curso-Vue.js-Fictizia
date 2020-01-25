<template>
  <div>
    <h2>Death Eaters</h2>
    <div>
      <div v-for="(deathEater, index) in deathEaters" :key="index">
        <WizardCard :deathEater="deathEater" :index="index"></WizardCard>
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
          image: "../assets/bellatrix.jpg",
          name: "Bellatrix Lestrange",
          price: 3000,
          wanted: true
        },
        {
          image: "../assets/lucius.jpg",
          name: "Lucius Malfoy",
          price: 1000,
          wanted: true
        },
        {
          image: "../assets/narcisa.jpg",
          name: "Narcisa Malfoy",
          price: 500,
          wanted: true
        },
        {
          image: "../assets/draco.jpg",
          name: "Draco Malfoy",
          price: 200,
          wanted: true
        },
        {
          image: "../assets/greyback.png",
          name: "Fenrir Greyback",
          price: 4000,
          wanted: true
        }
      ]
    };
  }
};
</script>

<style>
</style>