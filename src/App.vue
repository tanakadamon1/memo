<script setup>
import { RouterLink, RouterView } from 'vue-router'
import inputMemo from './components/inputMemo.vue';
import memoList from './components/memoList.vue';
import { ref, watch, onMounted } from 'vue';

const memos = ref([]);

function addMemo(newMemo){
  memos.value.push(newMemo);
}
function deleteMemo(index){
  memos.value.splice(index, 1)
}
const STORAGE_KEY = 'my-memos'

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    try {
      memos.value = JSON.parse(saved)
    } catch (e) {
      console.error('JSONの読み込みエラー:', e)
    }
  }
})

watch(memos, (newVal) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal))
}, { deep: true })
</script>

<template>
 <h1>メモ！</h1>
 <inputMemo @addMemo="addMemo"/>
 <memoList :memos="memos" @deleteMemo="deleteMemo" />
</template>

<style scoped>

</style>
