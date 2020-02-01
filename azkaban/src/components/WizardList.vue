<template>
<div>
  <Form @new-wizard="newWizard"/>
  <div>
    <h1>Death Eaters</h1>
    <div>
      <div
        v-if="exists"
        style="margin-top= 20px"
      >No wizard for this search. Please, try another name.</div>
      <div class="container" v-for="(deathEater, index) in searchWizard" :key="index">
        <WizardCard
          :deathEater="deathEater"
          :index="index"
          @remove-wizard="removeWizard"
          @captured-wizard="capturedWizard"
        ></WizardCard>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import WizardCard from "@/components/WizardCard";
import Form from '@/components/Form'

export default {
  name: "WizardList",
  components: {
    WizardCard,
    Form
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
  props: {
    search: {
      required: false,
      type: String
    }
  },
  methods: {
    removeWizard(value) {
      this.deathEaters.splice(this.deathEaters[value], 1);
    },
    capturedWizard(value) {
      this.deathEaters[value].wanted = !this.deathEaters[value].wanted;
    },
    newWizard(value){
      this.deathEaters.push(value);
    }
  },
  computed: {
    searchWizard() {
      if (this.search) {
        const list = this.deathEaters.filter(wizard =>
          wizard.name.toLowerCase().includes(this.search.toLowerCase())
        );
        return list;
      } else return this.deathEaters;
    },
    exists() {
      if (this.searchWizard == 0) return true;
      else return false;
    }
  }
};
</script>

<style>
.container {
  display: inline-block;
}
</style>