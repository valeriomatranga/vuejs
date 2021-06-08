const app = new Vue({
    el: '#app',
    data: {
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        albums: null,
        error: null
    },
    methods: {

    },
    mounted() {
        axios
            .get(this.url)
            .then(resp => {
                console.log(resp.data.response);
                this.albums = resp.data.response;
            })
            .catch(e => {
                console.error(e);
                this.error = "Sorry could not connect to the API " + e
            })
    }
})