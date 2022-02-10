// this is a component
// 1st arg is the name of the component
// 2nd arg is an object to configure the component
app.component('product-display', {
    // data outside the component (located in main.js) accessed via props
    props: {
        premium: {
            // prop validation
            type: Boolean,
            required: true
        }
    },
    template:
        // the "/*html*/" activates the es6-string-html extension 
        // for html syntax highlighting in js files
        /*html*/
        `
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <!-- image is a computed property in this component -->
                    <img v-bind:src="image">
                </div>

                <div class="product-info">
                    <!-- title is a computed property in this component -->
                    <h1>{{ title }}</h1>

                    <!-- v-if by itself or paired with v-else -->
                    <!-- inStock is a computed property in this component -->
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>

                    <!-- shipping is a computed property in this component -->
                    <p>Shipping: {{ shipping }}</p>

                    <!-- 
                        A child component: details is a prop in the child component, 
                        the value of which is a data in this component, ProductDisplay.js 
                    -->
                    <product-details :details="details"></product-details>

                    <!-- update the image & inStock using computed properties located in this component -->
                    <div v-for="(variant, index) in variants" 
                         :key="variant.id" 
                         @mouseover="updateVariant(index)"
                         class="color-circle" 
                         :style="{ backgroundColor: variant.color }">
                    </div>

                    <!-- inStock is a computed property in this component -->
                    <button class="button" 
                            :class="{ disabledButton: !inStock }" 
                            :disabled="!inStock"
                            v-on:click="addToCart">Add to Cart</button>
                </div>
            </div>
        </div>
        `,
    // ES6 shorthand for --> data: function() {
    data() {
        // these are data that are in scope to this component
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            // index of the variant that it is hovered on, based on variants[index].color
            selectedVariant: 0,
            // data outside the child component, product-details
            // can be accessed by the child component through props
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
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
        // image associated with the item variants.image property
        image() {
            return this.variants[this.selectedVariant].image
        },
        // inStock associated with the item variants.quantity property
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
            // if the user is premium
            if (this.premium) {
                return 'Free'
            }
            // if the user is not premium
            return 2.99
        }
    }
})