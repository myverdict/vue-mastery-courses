// this creates a Vue instance
const app = Vue.createApp({
    // ES6 shorthand for --> data: function() {
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: false, 
            inventory: 0,
            onSale: true
        }
    }
})
