<template>
  <div class=" container main-layout row z-depth-5">
    <Collection
      :dbCollection='dbCollection'
      :mainTodo='mainTodo'
      @get-List='getList'
      @pushModal-Title='pushModalTitle'
      @del-collection='delCollection'
     />
    <ToDo
      :mainTodo='mainTodo'
    />
    <Modal
      :modalTitle='mainTodo.modalTitle'
      :visibleModal='mainTodo.visibleModal'
      :modalQuestion='mainTodo.modalQuestion'
      @modal-close='modalClose'
      @delete-item='deleteItem'
    />
  </div>
</template>

<script>
import Collection from '@/components/Collection'
import ToDo from '@/components/ToDo'
import Modal from '@/components/Modal'

export default {
  name: 'Home',
  data () {
    return {
      dbCollection: [
      ],
      mainTodo: {
        visibleModal: false,
        modalTitle: ''
      }
    }
  },
  components: {
    Collection, ToDo, Modal
  },
  methods: {
    getList(list ){
      this.mainTodo = list
    },
    modalClose(mainTodo) {
      this.mainTodo =  {visibleModal:false}

    },
    pushModalTitle (todo) {
       this.mainTodo.modalTitle = todo
    },
    delCollection (newcollectionList) {
      this.mainTodo = newcollectionList
    },
    deleteItem () {
      this.dbCollection = this.dbCollection.filter(t => t.id !== this.mainTodo.id)
      this.mainTodo = { visibleModal:false }

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
