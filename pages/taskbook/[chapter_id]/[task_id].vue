<template>
  <div class="taskbook-task">
    <div>{{ data.title }}</div>
    <ContentRenderer :value="data" class="taskbook-chapter__text" />
    <textarea class="w-full border-2 focus:outline-none font-mono" rows="10"></textarea>

    <Navigation :entry="$index[chapter_id + '/' + task_id]" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const chapter_id = route.params.chapter_id as string
const task_id = route.params.task_id as string
const { data } = await useAsyncData(`taskbook-task-${chapter_id}-${task_id}`, () => queryContent(`/taskbook/${chapter_id}/${task_id}`).findOne())
</script>
