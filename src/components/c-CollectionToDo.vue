<template>
  <li class="todos purple lighten-5 " >
    <span class="span"  v-on:click="$emit('open-collection', collectionList)" >
      {{collectionList.title}}
    </span>
    <button class="waves-effect waves-light btn" v-on:click="$emit('delet-collection', collectionList)" >&times;</button>
  </li>
</template>

<script>
export default {
  name: 'CollectionToDo',
  props: {
    collectionList: {
      type: Object
    }
  },
  methods: {

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
