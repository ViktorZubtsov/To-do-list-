<template>
  <aside class="aside col s4 ">
        <div class="select">
            <select class="list-filter" v-model="filter" @change="filterLists()" >
                <option value="Все">Все</option>
                <option value="Исполненные">Исполненные</option>
                <option value="Неисполненные">Неисполненные</option>
            </select>
        </div>
       <ul class="aside__content">
            <CollectionToDo
                v-for="(list, index) in dbCollection" :key="index"
                :list="list"
                v-on:picked="openList"
                v-on:removed="deleteList"
            />
        </ul>
        <AddCollectionToDo :newList="newList" @add-todo="addNewList"/>
    </aside>
</template>

<script>
import CollectionToDo from "@/components/c-CollectionToDo.vue"
import moment from 'moment'
import AddCollectionToDo from "@/components/c-AddCollectionToDo.vue"

export default {
    name: "Collection",
    components: {
        CollectionToDo, AddCollectionToDo
    },
    data  () {
        return {
            filter: "Все",
            sort: "По дате добавления",
            sortReverse: false,
            newList: {
                title: "",
                date: 0,
                tasks: [],
                ismainTodo: false,
                status: "empty",
                isVisible: true
            }
        }
    },
    props: {
        dbCollection: Array
    },
    methods: {
        addNewList  (){
                this.newList.date = moment();
                this.dbCollection.push(JSON.parse(JSON.stringify(this.newList)));
                this.$store.commit('setcurModal', {
                    title: "Список добавлен",
                    isChoice: false,
                    submitText: "ОК",
                    contentText: `Список "` + this.newList.title + `" добавлен`
                });
                this.sortLists();
                this.openList(this.newList.title);
                this.newList.title = "";
        },
        openList (listTitle) {
            this.$emit("listPicked", this.dbCollection.find((list) => {return list.title == listTitle}));
        },
        deleteList (listTitle){
            this.$emit("listRemoved", listTitle);
        },
        filterLists (){

            if (this.filter == "Все")
                this.dbCollection.map((list) => {list.isVisible = true});
            else if (this.filter == "Исполненные")
                this.dbCollection.map((list) => {
                    if (list.status == "completed") list.isVisible = true
                    else list.isVisible = false});
            else if (this.filter == "Неисполненные")
                this.dbCollection.map((list) => {
                    if (list.status != "completed") list.isVisible = true
                    else list.isVisible = false});
        },
        sortLists (){
            let sortFunc;
            if (this.sort == "По дате добавления")
                sortFunc = (a, b) => {
                    if (moment(a.date) > moment(b.date)) return 1;
                    else if (moment(a.date) < moment(b.date)) return -1;
                    return 0;
                    };
            else if (this.sort == "По имени")
                sortFunc = (a, b) => {return a.title.localeCompare(b.title);};

            if (this.sortReverse) this.dbCollection.reverse(sortFunc);
            else this.dbCollection.sort(sortFunc);
        }
    },
    computed: {
        listsStatuses (){
            return this.dbCollection.map(list => list.status);
        }
    },
    watch: {
        lists (){
            this.filterLists();
        },
        listsStatuses (){
            this.filterLists();
        }
    }
}
</script>
