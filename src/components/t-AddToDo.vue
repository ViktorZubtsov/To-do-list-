<template>
  <form class="to-do__control" @submit.prevent="onSubmitTodo">
    <div class="row input-to-do ">
        <div class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input  class="autocomplete" type="text"  v-model="title">
              <label for="autocomplete-input">Введите дело</label>
            </div>
          </div>
        </div>
      </div>

      <p class="md">
        <label>
          <input type="checkbox" />
          <span>Срочное</span>
        </label>
      </p>
      <button class="waves-effect waves-light btn" type="submit">Добавить дело</button>

  </form>
</template>

<script>
export default {
  name: 'AddToDo',
  data () {
    return {
      title: '',
      visibleModal: false,
      modalTitle: ''
    }
  },
  methods: {
    onSubmitTodo () {
      if (this.title.trim()) {
        // const newTodo = {
        //   id: Date.now(),
        //   title: this.title,
        //   visibleModal: this.visibleModal,
        //   modalTitle: this.title,
        //   desc: [ {todo: '55', completed: false, prior: false}, {todo: '55', completed: false, prior: false} ]
        // }
        // this.$emit('add-todo', newTodo)
        // this.title = ''

      }
    }
  }
}
</script>
