<template>
  <div class="to-do__control">
    <div class="row input-to-do ">
        <div class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input type="text" class="autocomplete">
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
      <button class="btn waves-effect waves-light md" type="submit" name="action">Добавить дело
      </button>
  </div>
</template>

<script>
export default {
  name: 'AddToDo'
}
</script>
