<template>
  <section class="to-do col s8">
    <h1 class="to-do__title">{{mainTodo.title}}</h1>
    <ul class="to-do__content">
      <ToDoItem
      :des='des'
      v-for="des in mainTodo.desc" :key="des.id"
      />
    </ul>
    <AddToDo/>
  </section>
</template>

<script>

import AddToDo from '@/components/t-AddToDo'
import ToDoItem from '@/components/t-ToDoItem'

export default {
  name: 'ToDo',
  components: {
    AddToDo, ToDoItem
  },
  props: {
    mainTodo: {
      type: Object
    }
  }
}
</script>
