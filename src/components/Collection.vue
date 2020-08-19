<template>
  <aside class="aside col s4 ">
    <SortCollection/>

    <ul class="aside__content">
      <CollectionToDo/>
      <!-- <AsideTodo v-bind:key="title" v-bind:todosAside="title"  v-for="title in todosAside"  v-on:open-todo="openTodo"  v-on:remove-todos="removeItem" /> -->
    </ul>
    <div class="aside__add-to-do-list row">
      <AddCollectionToDo/>
      <!-- <AddAsideTodo @add-todo="addTodo"/> -->
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
  }
}
</script>
