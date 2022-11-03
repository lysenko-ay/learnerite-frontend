<template>
  <div class="taskbook-chapter">
    <div class="taskbook-chapter__title">{{ data.title }}</div>
    <ContentRenderer :value="data" class="taskbook-chapter__text" />

    <div class="taskbook-chapter__content">
      <ul>
        <li v-for="task of $index[chapter_id].content.content" :key="task.id">
          <NuxtLink :to="'/taskbook/' + chapter_id + '/' + task.id" class="text-blue-600 hover:text-blue-700">{{ task.id
          }}</NuxtLink>
        </li>
      </ul>
    </div>

    <Navigation :entry="$index[chapter_id]" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const chapter_id = route.params.chapter_id as string
const { data } = await useAsyncData('taskbook-chapter-' + chapter_id, () => queryContent('/taskbook/' + chapter_id).findOne())
</script>
