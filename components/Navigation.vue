<template>
  <div class="navigation flex">
    <div class="w-1/4">
      <NuxtLink v-if="entry.prev" :to="'/taskbook/' + entry.prev" class="text-blue-600 hover:text-blue-700 w-1/4">&lt;
        {{ entry.prev }}
      </NuxtLink>
    </div>
    <div class="flex-1 text-center">
      <NuxtLink to="/taskbook" class="text-blue-600 hover:text-blue-700">Index</NuxtLink>
    </div>
    <div class="w-1/4 text-end">
      <NuxtLink v-if="entry.next" :to="'/taskbook/' + entry.next" class="text-blue-600 hover:text-blue-700">{{
          entry.next
      }} &gt;
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  entry: Object
})
</script>
