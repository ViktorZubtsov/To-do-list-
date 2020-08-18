<template>
  <li class="todos purple lighten-5 " >
    <span class="span"  v-on:click="$emit('pick-list')" >
      {{todoLlist.title}}
    </span>
    <!-- <button class="waves-effect waves-light btn" v-on:click="$emit('remove-todos', todosAside.id, todosAside.title)">&times;</button> -->

  </li>
</template>

<script>

export default {
  name: 'todolist',
  props: {
    todoLlist: {
      type: Object,
      require: true
    },
    title: { type: String }
  },
  methods: {
    pickList () {
      this.$emit('picked', this.title)
    }
  }
}
</script>
<style >
.todos {
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 5px;
}
.todos >  span {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
