<template>
    <section>
        <h2>Home</h2>
        <!-- <router-link :to="'/equipo/' + id">Equipo</router-link> -->
        <router-link :to="{name: 'equipo', params: {id: id} }">Equipo</router-link>
    </section>
</template>

<script>
export default {
    data() {
        return {
            id: 'alvaro'
        }
    }
}
</script>