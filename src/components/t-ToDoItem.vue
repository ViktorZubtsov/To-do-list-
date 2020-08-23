<template>
    <li class="todos purple lighten-5 row ">
        <p class="col s5">
            <label>
                <input type="checkbox" v-model="task.isDone" />
                <span>Статус</span>
            </label>
        </p>
        <h4 class="col s5">{{task.title}}</h4>
        <span class="important col s1" v-if="task.isImportant" ></span>
        <span class="col s4"  >{{task.date}}</span>
        <a class="col s1" v-on:click="showRemovePopup" >x</a>
    </li>
</template>

<script>
export default {
    name: "ToDoItem",
    props: {
        task: Object
    },
    methods: {
        removeTask (){
            this.$emit("removed", this.task.title);
        },
        showRemovePopup (){
            this.$store.commit('setcurModal', {
                title: "Удалить задачу",
                isChoice: true,
                submitText: "Удалить",
                cancelText: "Отмена",
                contentText: `Удалить задачу  "` + this.task.title + `" ?`,
                submitFunc: this.removeTask
            });
        }
    }
}
</script>

<style>

li {
    display: flex;
    align-items: center;
}
.btn {
    margin: auto 0;
    float: right;
}
.aside__content{
    margin: 0;
}
.main-layout{
    padding-top: 15px;
    padding-bottom: 15px;
}

</style>
