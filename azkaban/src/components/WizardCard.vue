<template>
  <div class="card">
    <img :src="`${deathEater.image}`" style="max-width: 250px; height: 350px" />
    <div>
      <div class="container">
        <h4>{{deathEater.name}}</h4>
        <p>Reward: {{deathEater.price}}</p>
        <p style="color: red"><strong>{{text}}</strong></p>
      </div>
      <div>
        <button class="button" @click="capturedWizard(index)">Captured Wizard</button>
        <button class="button" @click="removeWizard(index)">Dead Wizard</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WizardCard",
  props: {
    deathEater: {
      required: true,
      type: Object
    },
    index: {
      required: true,
      type: Number
    }
  },
  computed: {
    text({ deathEater }) {
      return deathEater.wanted ? "Wanted" : "Captured"
    }
  },
  methods: {
    capturedWizard(id) {
      this.$emit("captured-wizard", id);
    },
    removeWizard(id) {
      this.$emit("remove-wizard", id);
    }
  }
};
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 250px;
  margin-bottom: 20px;
  padding-bottom: 20px;
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
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
</style>