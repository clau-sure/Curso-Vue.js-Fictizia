<template>
  <div>
    {{deathEater.image}}
    {{deathEater.name}}
    {{deathEater.price}}
    {{deathEater.wanted}}
    <button @click="removeWizard(index)">Captured Wizard</button>
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
            type: Number,
        }
    },
    methods: {
    removeWizard(id){
        this.$emit("remove-all", id)
    }
    }
};
</script>

<style>
</style>