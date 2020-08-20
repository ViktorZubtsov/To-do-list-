<template>
  <aside class="aside col s4 ">
    <SortCollection/>
    <ul class="aside__content">
      <CollectionToDo :collectionList='collectionList'
      v-for="collectionList in dbCollection" :key="collectionList.id"
      v-on:open-collection="openCollection"
      v-on:delet-collection='deletCollection'
      />
    </ul>
    <div class="aside__add-to-do-list row">
      <AddCollectionToDo @add-todo="addTodo"/>
    </div>
  </aside>
</template>

<script>
import SortCollection from '@/components/c-SortCollection'
import CollectionToDo from '@/components/c-CollectionToDo'
import AddCollectionToDo from '@/components/c-AddCollectionToDo'

export default {
  name: 'Collection',
  components: {
    SortCollection, CollectionToDo, AddCollectionToDo
  },
  props: {
    dbCollection: {
      type: Array
    },
    mainTodo: {}
  },
  data () {
    return {

    }
  },
  methods: {
    openCollection (collectionList) {
      const list = {
        title: collectionList.title,
        id: collectionList.id,
        desc: collectionList.desc
      }
      this.$emit('get-List', list)
    },
    addTodo (todo) {
      this.mainTodo.visibleModal = true
      this.dbCollection.push(todo)
      console.log(todo)
      this.$emit('pushModal-Title', todo.modalTitle)
    },
    deletCollection(collectionList) {
      const newcollectionList = {
        visibleModal:true,
        modalQuestion: collectionList.modalTitle,
        id: collectionList.id
      }
      this.$emit('del-collection', newcollectionList)
    }
  }
}
</script>
