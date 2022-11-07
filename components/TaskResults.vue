<template>
  <div class="task-results mx-5">
    <table class="w-full border">
      <thead class="border-b bg-gray-100">
        <tr>
          <th class="border-r p-2">#</th>
          <th class="border-r p-2">Входные параметры</th>
          <th class="border-r p-2">Ожидание</th>
          <th class="p-2">Получено</th>
        </tr>
      </thead>
      <tbody>
        <TestResult v-for="test of tests" :key="(test as any).index" :test="test" />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps({
  tests: {
    type: Array,
    required: true,
  }
})
</script> 
