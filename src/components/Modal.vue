<template>
    <div id="modal1" class="modal" v-if="visibleModal">
      <div class="modal-close"  v-on:click="$emit('modal-close')">x</div>
      <div class="modal-content">
        <h6 v-if='modalTitle' id="modalTitle">Список "{{modalTitle}}" добавлен</h6>
        <p id="title" v-if='modalQuestion'>Хотите удалить список дел "{{modalQuestion}}" ?</p>
      </div>
      <div class="modal-footer"   v-if='modalQuestion'>
        <a href="#!" id="delete"  class="delete waves-effect waves-green btn-flat" v-on:click="$emit('delete-item')" >Удалить</a>
        <a href="#!" class="modal-close waves-effect waves-green btn-flat" v-on:click="$emit('modal-close')" >Нет</a>
      </div>
    </div>
</template>

<script>

export default {
  name: 'modal',
  props: {
  visibleModal: {
    type: Boolean
  },
  modalTitle: {
    type: String
  },
  modalQuestion: {
    type: String
  }
  },
  methods: {

  }
}
</script>
<style >
.modal {
  display: block;
  top: 41%;
  width: 50%;
}
.modal-footer {
  display: block;
}
</style>
