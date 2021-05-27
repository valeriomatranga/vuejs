const app = new Vue({
    el: '#app',
    data: {
        response: ''

    },
    methods: {

    },
    mounted() {


        // AXIOS
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/name')
            .then(response => {
                console.log(response.data.response);
                this.response = response.data

            })
            .catch(error => {
                console.error(error);
            }).finally(() => {
                console.log('I run anyway no matter what!');
            })
        // XML HTTP REQUEST (plain javascript)

        /* const xhttp = new XMLHttpRequest();
        //console.log(xhttp);
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                const data = JSON.parse(this.responseText);
                console.log(data.response);
            }
        }
        xhttp.open('GET', 'https://flynn.boolean.careers/exercises/api/random/name', true);
        xhttp.send(); */

    }

});


// ANCHE FUORI DA VUEJS
// XML HTTP REQUEST (plain javascript)

/* const xhttp = new XMLHttpRequest();
//console.log(xhttp);
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        console.log(data.response);
    }
}
xhttp.open('GET', 'https://flynn.boolean.careers/exercises/api/random/name', true);
xhttp.send(); */