<script setup>
import { ref } from 'vue';
const emit = defineEmits(['addMemo'])

const inputText = ref('')

function sendMemo(){
    if(inputText.value !== ''){
        emit('addMemo',
        {
            content: inputText.value,
            editFlag: false
        });
        inputText.value = '';
    }
}
</script>
<template>
    <input type="text" v-model="inputText">
    <button @click="sendMemo">送信</button>
</template>
<style scoped>
input[type="text"]{
    border: 1px solid #666;
    padding: 8px;
    border-radius: 4px;
    margin-bottom: 24px;
}
button{
    border: solid 2px #444;
    padding: 4px 8px;
    margin-left: 8px;
    background: #fff;
    color: #444;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        opacity: .8;
    }
}

</style>