<template>
  <div class="task-error mx-5">
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
