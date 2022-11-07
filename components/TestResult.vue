<template>
  <div class="test-result">
    <div>
      <div class="inline-block">Тест #{{ test.index + 1 }}. Входные параметры:&nbsp;</div>
      <span class="font-mono">{{ test.params }}</span>
    </div>

    <div>
      <div class="w-24 inline-block">Ожидалось: </div>
      <span class="font-mono">{{ test.expectation }}</span>
    </div>
    <div>
      <div class="w-24 inline-block">Получено: </div>
      <span class="font-mono">{{ test.result }}</span>
    </div>

    <div>
      <span>Результат: тест </span>
      <span v-if="isCompleted">пройден</span>
      <span v-else>не пройден</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  test: {
    type: Object,
    required: true,
  },
})

const isCompleted = computed(() => {
  return props.test.expectation === props.test.result
})
</script>
