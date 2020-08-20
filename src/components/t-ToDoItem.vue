<template>
  <li class="todos purple lighten-5 ">{{des.todo}}</li>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: {
    des: {
      type: Object
    }
  }
}
</script>
