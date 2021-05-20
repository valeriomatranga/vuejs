const app = new Vue({
    el: '#app',
    data: {
        logo: './assets/img/logo.png' ,
        newTask: '',
        error: '',
        tasks: [
            'Learn HTML',
            'Learn CSS',
            'Learn JS'
        ],
        completedTasks: [],
        trash: []
    },
    methods: {
       /** Add a task */
       addTask(){
            if(this.newTask.length > 3) {
            // pushare new task in tasks
            this.tasks.unshift(this.newTask)
            this.newTask = ''
            this.error = ''
            } else {
                this.error = 'Devi inserire almeno 3 caratteri'
            }
       },
       removeTask(index, task){
            // remove task
            console.log('Remove task n.' + index);
    
            // Usare splice per rimuovere la task
            this.tasks.splice(index, 1)
            this.trash.unshift(task)
       },
       updateTask(){
           alert('Task updeted')
       },
       completeTask(index, task){
            this.completedTasks.unshift(task)
            this.tasks.splice(index, 1)
       },

       restoreCompletedTask(index, task){
            // move the task inside the todo list
            this.tasks.unshift(task)
            // remove the task
            this.completedTasks.splice(index, 1)
       },
       emptyTrash(){

        const destroy = confirm('Are you sure you want to empty the trash?')

        if(destroy){
            this.trash = [];
        }

       },
       restoreTrashedTasks(index, task){
             this.tasks.unshift(task);
             this.trash.splice(index, 1)
       }
    }
});

