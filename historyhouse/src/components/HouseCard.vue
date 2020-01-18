<template>
    <div>
        <h3>Your house information</h3>
        <p><strong>Name:</strong> {{houseInformation.name}}</p>
        <p v-if="houseInformation.school"><strong>School:</strong> {{houseInformation.school}}</p>
        <strong>Colors:</strong> <div v-for="(color, index) of houseInformation.colors" :key="`color-${index}`">{{color}}</div>
        <strong>Values:</strong> <div v-for="(value, index) of houseInformation.values" :key="`value-${index}`">{{value}}</div>
        <p><strong>Founder:</strong> {{houseInformation.founder}}</p>
        <p><strong>Head of the House: </strong>{{houseInformation.headOfHouse}}</p>
        <p><strong>Ghost:</strong> {{houseInformation.houseGhost}}</p>
        <p><strong>Mascot:</strong> {{houseInformation.mascot}}</p>
        <strong>Famous Members</strong><div v-for="(member, index) of houseInformation.members" :key="`member-${index}`">{{member.name}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            houseInformation: {
                type: Object,
                default: () => ({}),
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>