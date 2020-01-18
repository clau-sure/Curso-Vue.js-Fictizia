<template>
    <div>  
        <h2>Flourish and Blotts</h2>
        <div>
            <h3>Products</h3>
            
            <div v-for="product in productList" :key="product.id">
                Title: {{product.title}}
                Quantity: {{product.quantity}}
                Price: {{product.price}}
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
                        price: 15,
                        id: 1
                    },
                    {
                        title: "A History of Magic by Bathilda Bagshot",
                        quantity: 1,
                        price: 45,
                        id: 2
                    },
                    {
                        title: "The Life and Lies of Albus Dumbledore",
                        quantity: 5,
                        price: 22,
                        id: 3
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
    }
</script>

<style lang="scss" scoped>

</style>