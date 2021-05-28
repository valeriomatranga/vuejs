const app = new Vue({
    el: '#app',
    data: {
        url: 'https://api.openweathermap.org/data/2.5/forecast',
        query: 'Norwich',
        apiKey: 'YOUR_API_TOKEN_HERE',
        units: 'metric',
        forecastData: '',
        cityData: '',
        response: ''
    },
    methods: {

        /** Fetches an api and returns the response 
         * @param {string} url - the url where send the query
         * @returns {array} returns an array with the response object
        */
        /* fetchApi(url) {
            let data = []
            axios
                .get(url)
                .then(resp => {

                    data.push(resp);
                })
                .catch(e => {
                    console.error(e);
                })
            return data;
        } */
    },
    mounted() {
        const fullUrl = `${this.url}?q=${this.query}&appid=${this.apiKey}&units=${this.units}`;
        //console.log(fullUrl);
        axios
            .get(fullUrl)
            .then(resp => {

                this.forecastData = resp.data.list;
                this.cityData = resp.data.city

            })
            .catch(e => {
                console.error(e);
            })

        /* this.response = this.fetchApi(fullUrl) */

    }
})

