<template>
    <div>
        <img :src="`${wizard.image}`" style="max-width: 250px; height: 350px" >
        <div class="container">
            <h2>{{wizard.name}}</h2>
            <h3>House: {{wizard.house}}</h3>
            <p>Specie: {{wizard.species}}</p>
            <p>Gender: {{wizard.gender}}</p>
            <p>Date of Birth: {{wizard.dateOfBirth}}</p>
            <p>Ancestry: {{wizard.ancestry}}</p>
            <p>Eye colour: {{wizard.eyeColour}}</p>
            <p>Is he alive? <strong>{{wizard.alive}}</strong></p>
        </div>
        <router-link class="button" to="/">Go back to wizard List</router-link>
    </div>
</template>

<script>


export default {
    name: 'WizardView',
    props: {
        name: {
            type: String
        }

    },
    created() {
        var wizardList = localStorage.getItem('wizards');
        this.wizard = JSON.parse(wizardList).find(wizard => wizard.name === this.name)
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
