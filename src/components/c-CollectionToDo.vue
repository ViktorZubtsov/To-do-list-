<template>
    <li class="todos   status  " :class="listClass" >
        <span class="span  "  v-if="list.isVisible" v-on:click="openList"
        >
            {{list.title}}
            <button class="waves-effect waves-light btn" v-on:click="showRemovePopup" >&times;</button>
        </span>
    </li>
</template>

<script>
export default {
    name: "CollectionToDo",
    props: {
        list: Object
    },
    methods: {
        openList  (){
            this.$emit("picked", this.list.title);
        },
        deleteList (){
            this.$emit("removed", this.list.title);
        },
        showRemovePopup (){
            this.$store.commit('setcurModal', {
                title: "Удалить список",
                isChoice: true,
                submitText: "Удалить",
                cancelText: "Отмена",
                contentText: `Удалить список  "` + this.list.title + `" ?`,
                submitFunc: this.deleteList
            });
        }
    },
    computed: {
        listClass  (){
            return {
                'status_picked': this.list.ismainTodo,
                'status_completed': this.list.status == "completed",
                'status_not-completed': this.list.status == "not-completed",
                'status_empty': this.list.status == "empty"
            }
        },
        listTasksStatuses (){
            return this.list.tasks.map(task => task.isDone);
        }
    },
    watch: {
        listTasksStatuses (){
            if (this.list.tasks.length > 0)
            {
                let listIsCompleted = true;
                for (let task of this.list.tasks)
                {
                    if (!task.isDone)
                    {
                        listIsCompleted = false;
                        break;
                    }
                }
                if (listIsCompleted)
                    this.list.status = "completed"
                else
                    this.list.status = "not-completed"
            }
            else
                this.list.status = "empty";
        }
    }
}
</script>

