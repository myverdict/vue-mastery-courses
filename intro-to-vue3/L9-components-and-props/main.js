// this creates a vue instance
const app = Vue.createApp({
    // ES6 shorthand for --> data: function() {
    data() {
        // these are data that are global to all items
        // there need not be a separate cart for each item, hence global
        // there need not be a separate user type for each item, hence global
        return {
            cart: 0, 
            // data outside the component, product-display, 
            // can be accessed by the component through props
            premium: true
        }
    },
    methods: { }
})
