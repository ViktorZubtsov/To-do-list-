<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>


import MainLayout from '@/layouts/MainLayout'
import EmptyLayout from '@/layouts/Empty'
export default {
  name: 'app',
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    MainLayout, EmptyLayout
  }
}
</script>

<style lang="scss">
  @import '~materialize-css/dist/css/materialize.css';
  @import 'assets/index.css';












</style>
