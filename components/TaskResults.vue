<template>
  <div class="task-results" v-if="result">
    <div>
      <span>Результат: задание </span>
      <span v-if="isCompleted">выполнено</span>
      <span v-else>не выполнено</span>
    </div>
    <div v-for="(test, n) of tests" :key="n">
      <TestResult :test="test" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  result: {
    type: String,
    required: true,
  },
})

const failed = ref(0);
const total = ref(0);

const tests = computed(() => {
  const result = [];

  const lines = props.result.split('\r\n').filter((line) => line[0] === '`').map(test => test.slice(1).split('|'));
  lines.forEach((line, index) => {
    result.push({
      params: JSON.parse(line[0]),
      expectation: line[1],
      result: line[2],
      index,
    });

    if (line[1] !== line[2]) {
      failed.value++;
    }

    total.value = lines.length;
  });

  return result;
})

const isCompleted = computed(() => {
  return failed.value === 0
})
</script> 
