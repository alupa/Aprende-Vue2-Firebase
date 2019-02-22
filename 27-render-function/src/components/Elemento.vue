<!--<template>
  <div>
    <article v-if="tipo === 'article'"><slot></slot></article>
    <section v-if="tipo === 'section'"><slot></slot></section>
    ...
  </div>
</template>-->

<script>
export default {
  props: ['tipo'],
  render(createElement){
      return createElement(
          this.tipo,
          this.$slots.default
      )
  }
}
</script>

<style>

</style>