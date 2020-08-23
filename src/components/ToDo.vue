<template>
    <section class="to-do col s8">
        <h1 class="to-do__title">{{list.title}}</h1>
        <ul class="to-do__content">
            <ToDoItem v-for="(task, index) in list.tasks" :key = "index"
            :task = "task"
            v-on:removed = "removeTask"/>
        </ul>
        <form class="to-do__control" @submit.prevent="">
            <div class="row input-to-do ">
                    <div class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                        <input  class="autocomplete" v-model="newTask.title"  type="text" >
                        <label for="autocomplete-input">Введите дело</label>
                        </div>
                    </div>
                    </div>
                </div>
                <p class="col s5">
                    <label>
                        <input type="checkbox"  v-model="newTask.isImportant" id="add-new-task__isImportant" />
                        <span>Статус</span>
                    </label>
                </p>
            <button v-on:click="addNewTask" class="waves-effect waves-light btn" type="submit">Добавить дело</button>
        </form>

    </section>
</template>

<script>
import ToDoItem from "@/components/t-ToDoItem"
import moment from 'moment'

export default {
    name: "Todo",
    data  () {
        return {
            newTask: {
                name: "",
                listTitle: "",
                date: 0,
                isImportant: false,
                isDone: false,
                isCreated: false
            }
        }
    },
    props: {
        list: Object
    },
    components: {
        ToDoItem
    },
    methods: {
        addNewTask  (){
            if (!Object.keys(this.list).length)
                this.$store.commit('setcurModal', {
                    name: "Список не выбран!",
                    isChoice: false,
                    submitText: "ОК",
                    contentText: `Выберите список`
                });
            else {
                this.newTask.date = moment().format("llll");
                this.newTask.listTitle = this.list.title;
                this.list.tasks.push(Object.assign({}, this.newTask));
                this.showCreatePopup(this.newTask.title, this.newTask.listTitle);
                this.newTask.title = "";
                this.newTask.isImportant = false;
            }
        },
        removeTask (tasktitle){
            this.list.tasks = this.list.tasks.filter((task) => {return task.title != tasktitle});
        },
        showCreatePopup  (tasktitle, listTitle){
            this.$store.commit('setcurModal', {
                title: "Задача добавлена",
                isChoice: false,
                submitText: "ОК",
                contentText: `Задача "` + tasktitle + `" добавлена в список "` + listTitle + `"`
            });
        }
    }
}
</script>

