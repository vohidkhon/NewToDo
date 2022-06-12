Vue.createApp({
    data() {
      return {
        todos: [
            { 
                id: 1, 
                title: 'Task #1' 
            },
            { 
                id: 2, 
                title: 'Task #2' 
            },
        ],
        title: '',
      };
    },
    methods: {
        addTask() {
            //условия на проверку
            if (this.title === ''){
                return this.title='Error - Please enter the task';
            } else if(this.title === 'Error - Please enter the task') {
                return
            };
            const newTask = {
                id: this.id++,
                title: this.title
            }
            //добавление
            this.todos.push(newTask);
            this.title = '';
        },
        removeTask(id) {
            //удаление
            const remove = this.todos.splice(id, 1);
        }
    }
  }).mount('#app');