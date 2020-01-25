<template>
  <div>
    <h2>Select a Hogwarts house</h2>
    <select v-model="selected">
      <option value="5a05dc8cd45bd0a11bd5e071" selected>Slytherin</option>
      <option value="5a05e2b252f721a3cf2ea33f">Griffindor</option>
      <option value="5a05da69d45bd0a11bd5e06f">Ravenclaw</option>
      <option value="5a05dc58d45bd0a11bd5e070">Hufflepuff</option>
    </select>
    <HouseCard :houseInformation="this.house"/>
  </div>
</template>

<script>

import HouseCard from './HouseCard'

export default {
    components: {
        HouseCard
    },
    data() {
        return {
            selected: "5a05dc8cd45bd0a11bd5e071",
            key: "$2a$10$RqwyBB1PLMaKYyCqnF5VKu5w9wJIpOqAo0M1hxwjV2APITXwg5K/G",
            houseId: '',
            house: {}
        }
    },
    created() {
        this.getHouses(this.selected)
    },

    watch: {
        selected(houseId){
            this.getHouses(houseId)
        }
    },

    methods: {
        getHouses(houseId) {
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