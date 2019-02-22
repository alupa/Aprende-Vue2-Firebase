new Vue({
    el: 'main',
    mounted(){
        this.cargarPersonas();
    },
    data: {
        personas: []
    },
    methods: {
        cargarPersonas(){
            axios.get('https://randomuser.me/api/?results=500')
                .then((respuesta) => {
                    this.personas = respuesta.data.results;
                });
        }
    },
});