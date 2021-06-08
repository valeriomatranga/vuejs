const app = new Vue({
    /* Options */
    el: '#app',
    data: {
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        disks: null,
        error: null,
        genres: ['all'],
        selected: 'all',
        sorted: null
    },
    methods: {
        fetchData(url) {
            axios.get(url)
                .then(resp => {
                    this.disks = resp.data.response
                })
                .catch(e => {
                    this.error = 'Could not connect to the API server! ' + e;
                }).finally(() => {
                    this.genres = [...this.genres, ...this.getGenres(this.disks)]
                })
        },
        getGenres(data) {
            const genres = []
            data.forEach(el => {
                if (!genres.includes(el.genre)) {
                    genres.push(el.genre)
                }
            })
            return genres;
        },
        sort(data) {
            if (!this.sorted || this.sorted === 'ASC') {
                this.disks = data.sort((a, b) => a.year - b.year)
                this.sorted = 'DESC'
            } else if (this.sorted === 'DESC') {
                this.sorted = 'ASC'
                this.disks = data.sort((a, b) => b.year - a.year)
            }
            console.log(this.disks);
        }
    },
    mounted() {
        this.fetchData(this.url);
    }
})