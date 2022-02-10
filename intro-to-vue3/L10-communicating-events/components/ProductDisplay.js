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

                    <ul>
                        <!-- v-for used on li el for looping over the 'details' array from data -->
                        <li v-for="detail in details">{{ detail }}</li>
                    </ul>
                
                    <!-- update the image & inStock using computed properties located in this component -->
                    <div v-for="(variant, index) in variants" 
                         :key="variant.id" 
                         @mouseover="updateVariant(index)" 
                         class="color-circle" 
                         :style="{ backgroundColor: variant.color }">
                    </div>
        
                    <!-- inStock is a computed property in this component -->
                    <!-- the addToCart method triggers the event emission -->
                    <button class="button" 
                            :class="{ disabledButton: !inStock }" 
                            :disabled="!inStock" 
                            v-on:click="addToCart">Add to Cart</button>
                    
                    <!-- inStock is a computed property in this component -->
                    <!-- the removeFromCart method triggers the event emission -->
                    <button class="button"
                            :class="{ disabledButton: !inStock }" 
                            :disabled="!inStock" 
                            @click="removeFromCart">Remove from Cart</button>
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
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        // when the Add to Cart button is clicked
        addToCart() {
            // emit (bubble up) an event
            // the 1st arg is the event name
            // the 2nd arg id is the payload of the event that is emitted
            // so when the updateCart method is triggered, it has access to the payload id
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        // when the Remove from Cart button is clicked
        removeFromCart() {
            // emit (bubble up) an event
            // the 2nd arg id is the payload of the event that is emitted
            // so when the updateCart method is triggered, it has access to the payload id
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
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