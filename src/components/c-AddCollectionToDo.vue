<template>
  <form class="col s12" @submit.prevent="onSubmit">
    <div class="row">
      <div class="input-field col s10">
        <input  class="autocomplete" type="text"  v-model="title"
        >
        <label for="autocomplete-input">Введите название списка</label>
        <button class="waves-effect waves-light btn" type="submit">Добавить список</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AddCollectionToDo',
  data () {
    return {
      title: '',
      visibleModal: false,
      modalTitle: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          visibleModal: this.visibleModal,
          modalTitle: this.title,
          desc: [ {todo: '55', completed: false, prior: false}, {todo: '55', completed: false, prior: false} ]
        }
        this.$emit('add-todo', newTodo)
        this.title = ''
        
      }
    }
  }
}
</script>

<style >
  form {
    display: flex;
  }
  input {
    width: 400px;
    z-index: 1000;
  }
 label {
  z-index: -1;
}
</style>
