<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import EditMemo from './editMemo.vue'

const props = defineProps({
  memos: Object
})

const emit = defineEmits(['deleteMemo'])


function handleDelete(index){
    emit('deleteMemo', index)
}

function handleEdit(index){
    props.memos[index].editFlag = !props.memos[index].editFlag
}
function editInput({ index, content }) {
  props.memos[index].content = content
  props.memos[index].editFlag = false
}
</script>
<template>
   <div v-for="(memo, index) in props.memos" :key="index" class="memo">
        <div v-if="!props.memos[index].editFlag" class="memo-content">{{ memo.content }}</div>
        <div v-else><EditMemo :editMemo="props.memos[index]" :index="index" :memos="props.memos" @editInput="editInput" /></div>
        <button v-if="!props.memos[index].editFlag" @click="handleEdit(index)" class="edit-btn">編集</button>
        <button @click="handleDelete(index)">削除</button>
    </div>
</template>

<style scoped>
.memo{
    margin-bottom: 16px;
    border-bottom: 1px solid #969696;
    padding-bottom: 16px;
}
.memo-content{
    margin-bottom: 8px;
}
.edit-btn{
    margin-right: 8px;
}
button{
    border: solid 2px #444;
    padding: 4px 8px;
    font-weight: bold;
    background: #FFF;
    color: #444;
    cursor: pointer;
    &:hover{
        opacity: .8;
    }
}
</style>