<template>
  <div class=" container main-layout row z-depth-5">
    <aside class="aside col s4 ">
        <div class="select">
            <select>
                <option value="Все">Все</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>

        <ul class="aside__content">

        </ul>
        <div class="aside__add-to-do-list row">

        </div>
    </aside>

    <section class="to-do col s8">
        <h1 class="to-do__title">
        </h1>
        <div class="to-do__content">

        </div>
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
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>
<style >
li {
  margin: 10px 1em;
  padding: 0 5px;
  border-radius: 4px;
}
</style>
