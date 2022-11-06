<template>
  <div class="taskbook-task">
    <div>{{ index[chapterId + '/' + taskId].title }}</div>
    <div>{{ task.description }}</div>
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
const course = route.params.course as string
const type = route.params.type as string
const chapterId = route.params.chapterId as string
const taskId = route.params.taskId as string
const { index } = await useCourseContent(course, type);
const task = await useTaskContent(course, type, chapterId, taskId) as any;

const code = ref('')

let socket = undefined
const onSendPressed = () => {
  if (socket?.connected) {
    socket.disconnect()
  }

  socket = io('ws://localhost:3030/')
  socket.emit('register', { course, type, chapterId, taskId }, (data) => {
    console.log('register', data);
  })
  socket.on('request-code', (callback) => {
    console.log('code requested');
    callback(code.value)
  })
  socket.on('last-job-id', (lastJobId) => {
    console.log('last job it:', lastJobId);
  })
  socket.on('result', (stdout) => {
    console.log('result:', stdout);
  })
  socket.on('error', (error) => {
    console.log('error:', error);
  })

}
</script>
