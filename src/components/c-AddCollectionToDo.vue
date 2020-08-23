<template>
    <form class="col s12"  @submit.prevent="$emit('add-todo', newList)">
        <div class="row w100">
        <div class="input-field in-add col s10">
            <input type="text" v-model="newList.title" class="autocomplete">
            <label for="autocomplete-input">Введите название списка</label>
            <button   type="submit" class="waves-effect waves-light btn" ><i class="large material-icons">sms</i></button>
        </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'AddCollectionTodo',
    props: {
        newList: {
            type: Object
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
.in-add{
  display: flex;
    justify-content: space-between;
    width: 100%;
}
.in-add > button {
  margin-left: 14px;
}
.w100{
  width: 100%;
}
</style>
