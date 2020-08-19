<template>
  <section class="to-do col s8">
    <h1 class="to-do__title"></h1>
    <ul class="to-do__content">
      <ToDoItem/>
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
  }
}
</script>
