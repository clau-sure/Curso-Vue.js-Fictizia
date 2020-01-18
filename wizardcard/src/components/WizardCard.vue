<template>
    <div>
        <form>
            Name:
            <input type="text" name="name" v-model="name"><br>
            Alias:
            <input type="text" name="alias" v-model="alias"><br>
            Role:
            <input type="text" name="role" v-model="role"><br>
            House:
            <input type="text" name="house" v-model="house"><br>
            School:
            <input type="text" name="school" v-model="school"><br>
            Wand:
            <input type="text" name="wand" v-model="wand"><br>
        </form>
        <div>
            <p>Name: {{name}}</p>
            <p>Alias: {{alias}}</p>
            <p>Role: {{role}}</p>
            <p>House: {{house}}</p>
            <p>School: {{school}}</p>
            <p>wand: {{wand}}</p>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            alias: "",
            role: "",
            house: "",
            school: "",
            wand: ""
        }
    }

}
</script>

<style>

</style>