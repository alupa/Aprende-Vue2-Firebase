<template>
    <h2>user: {{ id }}, post N° {{ post_id }}</h2>
</template>
<script>
export default {
    data(){
        return {
            id: this.$route.params.id,
            post_id: this.$route.params.post_id,
        }
    },
    watch: {
        '$route' (to) {
            this.id = to.params.id
            this.post_id = to.params.post_id
        }
    },
}
</script>