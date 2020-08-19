<template>
  <div class=" container main-layout row z-depth-5">
    <Collection/>
    <ToDo/>
  </div>
</template>

<script>
import Collection from '@/components/Collection'
import ToDo from '@/components/ToDo'

export default {
  name: 'Home',
  data () {
    return {
      dbCollection: {}
    }
  },
  components: {
    Collection, ToDo
  },
  methods: {

  }

}
</script>

<style >
li {
  margin: 10px 1em;
  padding: 0 5px;
  border-radius: 4px;
}
</style>
