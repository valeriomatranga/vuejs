const app = new Vue(
   {
    // options object
    el: '#app',

    data: {
        // TUTTE LE PROPRIETA CHE VI SERVONO PER IL FUNZIONAMENTO DELLA VS APPLICAZIONE
        message: "Hello Vue.js",
        title: 'Learn Vuejs',
        classTitle: 'lead'
    },
    methods:{

        // ES5 
        saluta: function () {  
            return 'Hi!'
        },

        // ES6
        greetings(){
            alert(this.title);
        }
    }

   }
);
/* Direttive VUE */
// V-MODEL (inputs)

// V-BIND (crea legame tra attributo html e vue instance)

// Methods

// V-ON (scatenare eventi)

//v-on:click="qualcosaDaFare()"
// @click="qualcosaDaFare()"

