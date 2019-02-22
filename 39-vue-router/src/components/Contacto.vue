<template>
    <section>
        <h2>Contacto</h2>
        <button @click="volverHome">Volver al home</button>
        <h2>Dónde encontrarme</h2>
        <p>Direccion en Iquique</p>
        <!-- <h5>{{ $route.params.newsletter }}</h5> -->
        <h5>{{ newsletter }}</h5>
        <pre>{{ numero }}</pre>
        <!-- <template v-if="$route.params.newsletter === 'true'"> -->
        <!-- <template v-if="newsletter === 'true'"> -->
        <template v-if="newsletter">
            <form action="">
                <h3>Newsletter</h3>
                <label for="correoe">Correo-e</label>
                <input type="email" placeholder="Tu correo-e" id="correoe">
            </form>
        </template> 
    </section>
</template>

<script>
export default {
    props: ['newsletter'],
    data() {
        return {
            numero: null,
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log('Antes de entrar')
        setTimeout(() => {
            next(vm => vm.numero = Math.floor(Math.random() * 1000))
        }, 2000)
    },
    created() {
        // setTimeout(() => this.$router.push('/'), 2000)
    },
    methods: {
        volverHome() {
            this.$router.push('/', () => console.log('Ruta cambiada'))
        }
    },
}
</script>