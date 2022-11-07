<template>
  <NuxtLink :to="to" class="text-blue-600 hover:text-blue-700">
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  }
})
</script>
