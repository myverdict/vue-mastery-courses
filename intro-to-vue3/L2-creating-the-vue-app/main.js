// this creates a Vue instance; sets up the VIEWMODEL
const app = Vue.createApp({
	// this is the MODEL that has the data
    // the data option for a component is a function; returns an object.
    // ES6 shorthand for --> data: function() {
    data() {
        return {
            product: 'Socks',
            description: 'Ankle length woollen socks'
        }
    }
})
