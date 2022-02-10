// this creates a Vue instance
const app = Vue.createApp({
    // ES6 shorthand for --> data: function() {
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            // index of the variant that it is hovered on, based on variants[index].color
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            onSale: false,
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        // when the user hovers the mouse over the item color variants
        // the selectedVariant index is set as below
        // 0 for item id 2234 (green socks) & 1 for item id 2235 (blue socks)
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    // use computed properties where computation is involved
    computed: {
        // title of the item
        title() {
            return this.brand + ' ' + this.product
        },
        // image associated with the item variants[index].image property
        image() {
            return this.variants[this.selectedVariant].image
        },
        // inStock associated with the item variants[index].quantity property
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        // sale associated with the onSale data above
        sale() {
            // if item is on sale
            if(this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale'
            }
            // if item is not on sale
            return '';
        }
    }
})
