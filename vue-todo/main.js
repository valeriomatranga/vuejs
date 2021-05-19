const app = new Vue({
    
    el: '#app',
    data: {
        logo: './assets/img/logo.png' ,
        newTask: '',
        tasks: [
            'Learn HTML',
            'Learn CSS',
            'Learn JS'
        ]
    },
    methods: {
       /** Add a task */
       addTask(){
           // pushare new task in tasks
            this.tasks.push(this.newTask)
            this.newTask = ''
       },
       removeTask(index){
        // remove task
        console.log('Remove task n.' + index);
        // Usare splice
        this.tasks.splice(index, 1)
       }
    }
});

