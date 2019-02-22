<template>
  <div id="app">
    <h1>Aprender en 2018-2019</h1>
    <h2>{{ msg | invertir | mayusculas }}</h2>
    <h3>{{ saludo | mayusculas }}</h3>
    <form @submit.prevent="agregarTecnologia">
      <input v-model="nuevaTecnologia" type="text" placeholder="Tecnología a aprender">
    </form>
    <ul>
      <li v-for="tecnologia in aprender">
        {{ tecnologia.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mixin} from './mixins'
export default {
  mixins: [mixin],
  nombre: 'App.vue',
  data() {
    return {
      msg: 'Welcome to your Vue.js App',
      saludo: 'Hola desde el curso de Vue & Firebase'
    }
  },
  created() {
        console.log('Creado desde el componente')
        //this.saludar()
  },
  // methods: {
  //   saludar() {
  //     alert('Hola desde el componente')
  //   }
  // },
  filters: {
    invertir(valor) {
      return valor.split('').reverse().join('')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
