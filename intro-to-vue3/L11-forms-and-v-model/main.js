// this creates a Vue instance
const app = Vue.createApp({
	// this is the MODEL that has the data
    // the data option for a component is a function; returns an object.
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
	// the methods option is an object that contains the desired methods
    methods: {
        // updates the cart (in data) every time the Add to Cart button is clicked
        updateCart(id) {
			// 'this' refers to the component instance
            this.cart.push(id)
        }
    }
})
