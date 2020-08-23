<template>
    <div  id="modal1" class="modal" v-if="modalInfo.isVisible">
        <a v-on:click="cancel">x</a>
        <div class="modal-content">
            <span>{{modalInfo.contentText}}</span>
        </div>
        <div  class="modal-footer" >
            <a  id="delete"  class="delete waves-effect waves-green btn-flat" v-if="modalInfo.isChoice"  v-on:click="cancel">{{modalInfo.cancelText}}</a>
            <a class="modal-close waves-effect waves-green btn-flat" v-on:click="submit">{{modalInfo.submitText}}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    props: {
        modalInfo: {
            name: String,
            isChoice: Boolean,
            submitText: String,
            cancelText: String,
            contentText: String,
            submitFunc: Function,
            isVisible: Boolean
        }
    },
    methods: {
        cancel  (){
            this.modalInfo.isVisible = false;
        },
        submit  (){
            this.modalInfo.isVisible = false;
            this.modalInfo.submitFunc();
        }
    }
}
</script>

<style>

.modal {
  display: block;
  top: 41%;
  width: 50%;
  z-index: 100;
}
.modal-footer {
  display: block;
}
</style>
