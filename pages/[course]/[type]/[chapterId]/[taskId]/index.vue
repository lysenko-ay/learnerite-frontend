<template>
  <div class="taskbook-task">
    <div>{{ index[chapterId + '/' + taskId].title }}</div>
    <!-- <ContentRenderer :value="data" class="taskbook-chapter__text" /> -->
    <!-- <textarea class="w-full border-2 focus:outline-none font-mono" rows="10"></textarea> -->

    <Navigation :entry="index[chapterId + '/' + taskId]" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const chapterId = route.params.chapterId as string
const taskId = route.params.taskId as string
const { index } = await useCourseContent('octave', 'taskbook');
</script>
