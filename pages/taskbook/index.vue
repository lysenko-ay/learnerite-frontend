<template>
  <div class="taskbook">
    <div>Taskbook</div>

    <div>
      <ul>
        <li v-for="chapter of $content" :key="chapter.id">
          <NuxtLink :to="'/taskbook/' + chapter.id" class="text-blue-600 hover:text-blue-700">{{ chapter.id }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
