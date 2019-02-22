const vm = new Vue({
    el: 'main',
    data: {
        laborales: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
        tareas: [
            { nombre: 'Hacer la compra', prioridad: 'baja'},
            { nombre: 'Aprender Vue y Firebase', prioridad: 'alta'},
            { nombre: 'Ir al gimnasio', prioridad: 'baja'},
        ],
        persona: {
            nombre: 'Alvaro',
            profesion: 'Dev',
            ciudad: 'Iquique'
        },
    }
});