<template>
  <div class="markdown-renderer" v-html="content" />
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: String,
    required: true
  }
})

const { $md } = useNuxtApp();
const content = computed(() => {
  return $md(props.data);
});
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.markdown-renderer:deep(code) {
  @apply text-pink-500;
}
</style>
