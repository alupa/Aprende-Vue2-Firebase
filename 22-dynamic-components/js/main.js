Vue.component('lista-tareas', {
    template: `
        <div>
            <h1><slot></slot></h1>
            <ul>
                <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
            </ul>
        </div>`,
    data() {
        return {
            tareas: [
                'Finalizar sección Componentes',
                'Inciar workflow con Vue CLI y webpack',
                'Terminar de estudiar la documentación de Vuex',
                'Seguir jugando con Vue Router y grabar el primer video'
            ]
        }
    }
});

Vue.component('tarea', {
    props: ['tarea'],
    template: `<li>{{ tarea }}</li>`,
});

Vue.component('contacto', {
    template: `<div><a href="mailto:alvaro.lupa@gmail.com">alvaro.lupa@gmail.com</a></div>`,
});

Vue.component('bio', {
    template: `<div><p>Lorem itsum....</p></div>`,
});

new Vue({
    el: 'main',
    data: {
        seleccionado: 'lista-tareas'
    }
});