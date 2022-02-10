// this is a component
// 1st arg is the name of the component
// 2nd arg is an object to configure the component
app.component('review-form', {
    template:
        // the "/*html*/" activates the es6-string-html extension 
        // for html syntax highlighting in js files
        /*html*/
        `
        <!-- to submit the form, add a listener to the form that will trigger the onSubmit method -->
        <!-- the 'prevent' is a modifier that prevents browser refresh -->
        <form class="review-form" @submit.prevent="onSubmit">
            <h3>Leave a review</h3>

            <!-- Note: label for and input id must match -->
            <label for="name">Name: </label>
            <!-- v-model 2 way binding (template to data & data to template) for the name input -->
            <input id="name" v-model="name">

            <!-- Note: label for and textarea id must match -->
            <label for="review">Review: </label>
            <!-- v-model 2 way binding (template to data & data to template) for the review textarea -->
            <textarea id="review" v-model="review"></textarea>

            <!-- Note: label for and select id must match -->
            <label for="rating">Rating: </label>
            <!-- v-model 2 way binding (template to data & data to template) for the rating select -->
            <!-- the 'number' here is a modifier that typecasts the value as a number -->
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>

            <!-- Note: label for and select id must match -->
            <label for="recommend">Would you recommend this product?</label>
            <!-- v-model 2 way binding (template to data & data to template) for the recommend select -->
            <select id="recommend" v-model="recommend">
                <option>Yes</option>
                <option>No</option>
            </select>

            <!-- button to submit the form -->
            <input class="button" type="submit" value="Submit">
        </form>
        `,
    // because we want to bind the form inputs (input, textarea, select) to our data 
    // add the data option here
    // ES6 shorthand for --> data: function() {
    data() {
        // these are data that are in scope to this component
        return {
            name: '',           // from input
            review: '',         // from textarea
            rating: null,       // from select
            recommend: null     // from select
        }
    },
    methods: {
        // when the submit button is clicked
        onSubmit() {
            // form validation
            if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
                alert('Review is incomplete. Please fill out every field.')
                // stop processing
                return
            }

            // create an object: get all the information from the form
            // inputs, update the data & store it in the object
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend
            }
            // once this object is created, we need to send it up because we 
            // don't want the reviews to live on the form; we want the reviews 
            // to live on the product, therefore emit (bubble up) an event
            // the 1st arg is the event name
            // the 2nd arg is the payload of the event that is emitted, so, 
            // when the addReview method (in ProductDisplay.js) is triggered, 
            // it has access to the payload
            this.$emit('review-submitted', productReview)

            // clear the form 
            this.name = '',
            this.review = '',
            this.rating = null
            this.recommend = null
        }
    }
})