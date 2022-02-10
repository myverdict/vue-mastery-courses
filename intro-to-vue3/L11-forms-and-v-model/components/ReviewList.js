// this is a component
// 1st arg is the name of the component
// 2nd arg is an object to configure the component
app.component('review-list', {
    // data outside the component (located in ProductDisplay.js) accessed via props
    props: {
        // prop validation
        reviews: {
            type: Array,
            required: true
        }
    },
    template: 
        // the "/*html*/" activates the es6-string-html extension 
        // for html syntax highlighting in js files
        /*html*/
        `
        <div class="review-container">
            <h3>Reviews: </h3>

            <ul>
                <li v-for="(review, index) in reviews" :key="index">
                    {{ review.name }} gave this {{ review.rating }} stars
                    <br>
                    "{{ review.review }}"
                    <br>
                    Recommended: {{ review.recommend }}
                </li>
            </ul>
        </div>
        `
})