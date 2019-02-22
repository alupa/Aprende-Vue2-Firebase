Vue.component('lista-tareas', {
    props: ['tareas'],
    template: `
        <div>
            <h1><slot></slot></h1>
            <ul>
                <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
            </ul>
        </div>`,
});

Vue.component('tarea', {
    props: ['tarea'],
    template: `<li>{{ tarea }}</li>`,
});

new Vue({
    el: 'main',
    data: {
        tareas: [
            'Finalizar sección Componentes',
            'Inciar workflow con Vue CLI y webpack',
            'Terminar de estudiar la documentación de Vuex',
            'Seguir jugando con Vue Router y grabar el primer video'
        ]
    },
});