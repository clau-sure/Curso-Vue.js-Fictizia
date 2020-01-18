<template>
  <div>
    <h2>Select a Hogwarts house</h2>
    <select v-model="selected">
      <option value="5a05dc8cd45bd0a11bd5e071">Slytherin</option>
      <option value="5a05e2b252f721a3cf2ea33f">Griffindor</option>
      <option value="5a05da69d45bd0a11bd5e06f">Ravenclaw</option>
      <option value="5a05dc58d45bd0a11bd5e070">Hufflepuff</option>
    </select>
    <div>
        <h3>Your house information</h3>
        <p><strong>Name:</strong> {{house.name}}</p>
        <p v-if="house.school"><strong>School:</strong> {{house.school}}</p>
        <strong>Colors:</strong> <div v-for="(color, index) of house.colors" :key="index">{{color}}</div>
        <strong>Values:</strong> <div v-for="(value, index) of house.values" :key="index">{{value}}</div>
        <p><strong>Founder:</strong> {{house.founder}}</p>
        <p><strong>Head of the House: </strong>{{house.headOfHouse}}</p>
        <p><strong>Ghost:</strong> {{house.houseGhost}}</p>
        <p><strong>Mascot:</strong> {{house.mascot}}</p>
        <strong>Famous Members</strong><div v-for="(member, index) of house.members" :key="index">{{member.name}}</div>

    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            selected: "",
            key: "$2a$10$RqwyBB1PLMaKYyCqnF5VKu5w9wJIpOqAo0M1hxwjV2APITXwg5K/G",
            houseId: '',
            house: ''
        }
    },
    watch: {
        selected(houseId){
            fetch(`https://www.potterapi.com/v1/houses/${houseId}?key=${this.key}`)
            .then(function(response){
                return response.json();
            })
            .then((response) => {
                this.house = response[0];
            })
        }
    }
}
</script>

<style lang="scss" scoped>
</style>