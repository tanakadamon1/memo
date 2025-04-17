<script setup>
import { RouterLink, RouterView } from 'vue-router'
import inputMemo from './components/inputMemo.vue';
import memoList from './components/memoList.vue';
import { ref } from 'vue';

const memos = ref([
]);

function addMemo(newMemo){
  memos.value.push(newMemo);
}
function deleteMemo(index){
  memos.value.splice(index, 1)
}

</script>

<template>
 <h1>メモ！</h1>
 <inputMemo @addMemo="addMemo"/>
 <memoList :memos="memos" @deleteMemo="deleteMemo" />
</template>

<style scoped>

</style>
