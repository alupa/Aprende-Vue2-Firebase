Vue.component('mis-tareas', {
    //props: ['tareas'],
    template: '<ul><li v-for="tarea in tareas">{{ tarea.title }}</li></ul>',
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((respuesta) => {
                //this.tareasAjax = respuesta.data;
                this.tareas = respuesta.data;

            });
    },
    data() {
        return {
            tareas: [],
            // tareasLocales: [
            //     { title: 'Hacer compra' },
            //     { title: 'Aprender Vue' },
            //     { title: 'Aprender ES6' },
            // ]
        }
    },
});

new Vue({
    el: 'main',
    // mounted(){
    //     axios.get('https://jsonplaceholder.typicode.com/todos')
    //         .then((respuesta) => {
    //             this.tareasAjax = respuesta.data;
    //         });
    // },
    // data: {
    //     tareasAjax: [],
    //     tareasLocales: [
    //         {title: 'Hacer compra'},
    //         {title: 'Aprender Vue'},
    //         {title: 'Aprender ES6'},
    //     ]
    // },
});