// Global mixin
import Vue from 'vue'
Vue.mixin({
    created() {
        //console.log('Hola desde mixin global')
        this.saludar(this.$options.nombre)
    },
    methods: {
        saludar(nombre) {
            alert(`Hola desde ${nombre}!`)
        }
    }
})

// Local mixin
export const mixin = {
    created() {
        console.log('Creado desde el mixin')
        //this.saludar()
    },
    data() {
        return {
          aprender: [
            {nombre: 'Ionic 3'},
            {nombre: 'Node'},
            {nombre: 'Mongo DB'},
            {nombre: 'Angular 3'},
            {nombre: 'Laravel'}
          ],
          nuevaTecnologia: null,
        }
      },
      methods: {
        agregarTecnologia() {
          this.aprender.unshift({
            nombre: this.nuevaTecnologia
          })
          this.nuevaTecnologia = null
        },
        // saludar() {
        //     alert('Hola desde el mixin')
        //   }
      },
}