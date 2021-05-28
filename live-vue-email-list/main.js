const app = new Vue({
    el: '#app',
    data: {
        url: 'https://flynn.boolean.careers/exercises//random/mail',
        emails: []
    },
    methods: {

    },
    mounted() {


        for (let index = 0; index < 10; index++) {

            axios
                .get(this.url)
                .then(resp => {
                    //console.log(resp);
                    this.emails.push(resp.data.response)
                }).catch(e => {
                    console.error(e);
                })


        }
    }

});

