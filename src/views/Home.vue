<template>
  <div class=" container main-layout row z-depth-5">
        <Collection class="v-main-wrapper__item"
            :dbCollection="dbCollection"
            v-on:listPicked="openList"
            v-on:listRemoved="deleteList"
        />
        <ToDo :list="mainTodo"/>
        <Modal :modalInfo="this.$store.getters.getcurModal"/>

      <a class="btn-floating pulse" v-on:click="logout()"><i class="large material-icons">exit_to_app</i></a>
  </div>

</template>

<script>

import Modal from "@/components/Modal"
import Collection from "@/components/Collection"
import ToDo from "@/components/ToDo.vue"

export default {
    name: "Home",
    components: {
        Modal,
        Collection,
        ToDo
    },
    data () {
        return {
            dbCollection: [],
            mainTodo: {}
        }
    },
    methods: {
        async logout () {
          await this.$store.dispatch('logout')
          this.$router.push('/login')
        },
        openList (list){
            this.mainTodo.ismainTodo = false;
            list.ismainTodo = true;
            this.mainTodo = list;
        },
        deleteList (listTitle){
            let list = this.dbCollection.find((list) => {return list.title == listTitle});
            if (list.ismainTodo) this.mainTodo = {};
            this.dbCollection = this.dbCollection.filter((list) => {return list.title != listTitle});
        }
    }
}
</script>

<style>

li {
  margin: 10px 1em;
  padding: 0;
  border-radius: 4px;
}
a{
    cursor: pointer;
    color: black;
}
.pulse{
  right: -4em;
}
</style>
