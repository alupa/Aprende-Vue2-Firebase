<template>
    <section>
        <h2>Carrito de compra</h2>
        <h3>Total de la compra: {{ totalCompra.toFixed(2) }} $</h3>
        <ul>
            <li v-for="(producto, indice) in carro">
                {{ producto.nombre }}
                <button @click="eliminarProducto(indice)">X</button>
            </li>
        </ul>
    </section>
</template>

<script>
    import {mapState, mapGetters, mapMutations} from 'vuex'
    export default {
        computed: {
            ...mapState(['carro']),
            ...mapGetters(['totalCompra']),
        },
        methods: mapMutations(['eliminarProducto'])
    }
</script>