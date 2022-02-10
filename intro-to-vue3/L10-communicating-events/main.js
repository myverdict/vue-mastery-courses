// this creates a Vue instance
const app = Vue.createApp({
    // ES6 shorthand for --> data: function() {
    data() {
        // these are data that are global to all items
        // there need not be a separate cart for each item, hence global
        // there need not be a separate user type for each item, hence global
        return {
            // the cart holds item ids
            cart: [],
            // data outside the component, product-display, 
            // can be accessed by the component through props
            premium: true
        }
    },
    methods: {
        // updates the cart (in data) every time the Add to Cart button is clicked
        updateCart(id) {
            this.cart.push(id)
        },
        // updates the cart (in data) every time the Remove from Cart button is clicked
        removeById(id) {
            // The indexOf() method returns the first index at which a given element 
            // can be found in the array, or -1 if it is not present. 
            const index = this.cart.indexOf(id)

            if(index > -1) {
                // the splice(startIndex, deleteCount) method changes the contents of an array by 
                // removing or replacing existing elements and/or adding new elements in place
                this.cart.splice(index, 1)
                // this.cart.pop(id)
            }
        }
    }
})
