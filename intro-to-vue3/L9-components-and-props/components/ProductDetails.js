// this is a child component to product-display component
// 1st arg is the name of the component
// 2nd arg is an object to configure the component
app.component('product-details', {
    // data outside this component (located in ProductDisplay.js) accessed via props
    props: {
        details: {
            // prop validation
            type: Array,
            required: true
        }
    },
    template: 
        // the "/*html*/" activates the es6-string-html extension 
        // for html syntax highlighting in js files
        /*html*/
        `
        <ul>
            <!-- v-for used on li el for looping over the 'details' array from data -->
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
        `
})