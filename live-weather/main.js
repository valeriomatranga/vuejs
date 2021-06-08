const app = new Vue({
    el: '#app',
    data: {
        url: 'http://api.openweathermap.org/data/2.5/forecast',
        query: 'Norwich',
        appid: 'a24da99920814dac10773c623bd902db',
        units: 'metric',
        data: null
    },
    methods: {

    },
    mounted() {
        const fullpath = `${this.url}?q=${this.query}&appid=${this.appid}&units=${this.units}`
        console.log(fullpath);

        axios
            .get(fullpath)
            .then(res => {
                this.data = res.data
            }).catch(e => {
                console.error(e);
            }).finally(() => {
                console.log('All done!');
            })
    }

});

