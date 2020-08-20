<template>
  <div class=" container main-layout row z-depth-5">
    <Collection :dbCollection='dbCollection' :mainTodo='mainTodo' @get-List='getList' />
    <ToDo :mainTodo='mainTodo'/>
  </div>
</template>

<script>
import Collection from '@/components/Collection'
import ToDo from '@/components/ToDo'

export default {
  name: 'Home',
  data () {
    return {
      dbCollection: [
      ],
      mainTodo: {

      }
    }
  },
  components: {
    Collection, ToDo
  },
  methods: {
    getList(list ){
      this.mainTodo = list
    }
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
