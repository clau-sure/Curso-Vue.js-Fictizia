<template>
    <div>  
        <h2>Flourish and Blotts</h2>
        <div>
            <h3>Products</h3>
            
            <div v-for="(product, index) in productList" :key="index">
                Title: {{product.title}}
                Quantity: {{product.quantity}}
                Price: {{product.price}}
                <button @click="addProduct(index)">Add product</button>
                <button @click="removeProduct(index)">Remove product</button>
            </div>
        </div>
        <div>
            <h3>Your carrier</h3>
            <p>Total: {{totalPrice}} galeons</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                productList: [
                    {
                        title: "The Tales of Beedle the Bard",
                        quantity: 2,
                        price: 15
                    },
                    {
                        title: "A History of Magic by Bathilda Bagshot",
                        quantity: 1,
                        price: 45
                    },
                    {
                        title: "The Life and Lies of Albus Dumbledore",
                        quantity: 5,
                        price: 22
                    },
                ]
            }
        },
        computed: {
            totalPrice({productList}) {
                var totalPrice=""
                productList.forEach(product => {
                    totalPrice += product.quantity * product.price
                });
                return totalPrice;
            }
        },
        methods: {
            addProduct(index) {
                this.productList[index].quantity++
            },
            removeProduct(index){
                this.productList[index].quantity--
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>