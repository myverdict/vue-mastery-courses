// this creates a Vue instance
const app = Vue.createApp({
    // ES6 shorthand for --> data: function() {
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
            sizes: ['S', 'M', 'L', 'XL']
        }
    }
})
