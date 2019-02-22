<template>
  <section>
    <button @click="cambiar">Cambiar Auth</button>
    <h1>Rutas con Vue Router</h1>
    <router-link to="/" active-class="activo" tag="li" exact>
      <a>Home</a>
    </router-link>
    <router-link to="/contacto" active-class="activo" tag="li">
      <a>Contacto</a>
    </router-link>
    <router-link to="/equipo/alvaro" active-class="activo" tag="li">
      <a>Equipo</a>
    </router-link>
    <router-link to="/usuario/77/post/11" active-class="activo" tag="li">
      <a>Usuario</a>
    </router-link>
    <router-link to="/usuario/88/post/22" active-class="activo" tag="li">
      <a>Usuario</a>
    </router-link>
    <router-link :to="{path: '/article', hash: '#parrafo'}" active-class="activo" tag="li">
      <a>Articulo</a>
    </router-link>
    <hr>
    <transition name="aparecer">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: mapMutations(["cambiar"])
};
</script>

<style>
/* .router-link-active {
    color: red
  } */
.activo a {
  color: red;
}
/* Transition */
.aparecer-enter {
  opacity: 0;
}

.aparecer-enter-active {
  transition: opacity 1s;
}

.aparecer-leave-to {
  opacity: 0;
}

.aparecer-leave-active {
  transition: opacity 1s;
}
</style>