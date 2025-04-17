<script setup>
import { reactive } from 'vue'

const props = defineProps({
    editMemo: Object,
    index: Number,
    memos: Object,

})
const editContent = reactive({
    content: props.editMemo.content
})
const emit = defineEmits(['editInput'])
function editMemo(){
    props.memos[props.index].content = editContent.content
    props.memos.editFlag = !props.memos.editFlag
    emit('editInput', { index: props.index, content: editContent.content })
}
</script>
<template>
    <input type="text" v-model="editContent.content">
    <button @click="editMemo()">完了</button>
</template>
<style scoped>
input[type="text"]{
    border: 1px solid #666;
    padding: 8px;
    border-radius: 4px;
    margin-bottom: 8px;
}
button{
    margin-left: 16px;
}
button{
    border: solid 2px #444;
    padding: 4px 8px;
    background: #fff;
    color: #444;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        opacity: .8;
    }
}
</style>