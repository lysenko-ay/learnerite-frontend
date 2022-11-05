<template>
  <div class="taskbook-task">
    <div>{{ index[chapterId + '/' + taskId].title }}</div>
    <textarea class="w-full border-2 focus:outline-none font-mono" rows="10" v-model="code"></textarea>
    <button class="border rounded-xl px-4 py-2 shadow hover:bg-gray-50" @click="onSendPressed">
      Проверить решение
    </button>

    <Navigation :entry="index[chapterId + '/' + taskId]" />
  </div>
</template>

<script setup lang="ts">
import { io } from "socket.io-client"

const route = useRoute()
const chapterId = route.params.chapterId as string
const taskId = route.params.taskId as string
const { index } = await useCourseContent('octave', 'taskbook');

const code = ref('')

let socket = undefined
const onSendPressed = () => {
  if (socket?.connected) {
    socket.disconnect()
  }

  socket = io('ws://localhost:3030/')
  socket.emit('register', (data) => {
    console.log(data);
  })
  socket.on('request-code', (callback) => {
    console.log('code requested', callback);
    callback('disp(1)')
  })
  socket.on('last-job-id', (lastJobId) => {
    console.log('last job it: ', lastJobId);
  })

}
</script>
