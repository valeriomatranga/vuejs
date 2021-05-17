const app = new Vue({
    el: '#app', 
    data: {
        colorClass: 'red'
    },
    methods: {
        
        changeColor: function(){
            if(this.colorClass === 'red'){
              return this.colorClass = 'blue';
            }
             return this.colorClass = 'red';   
        }
    }
})