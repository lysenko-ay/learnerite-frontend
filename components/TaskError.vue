<template>
  <div class="task-error" v-if="error">
    <div>При выполнении кода возникла ошибка:</div>
    <div>{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: {
    type: [Object, String],
    required: true,
  },
});
</script>
