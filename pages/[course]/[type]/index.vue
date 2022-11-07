<template>
  <div class="taskbook">
    <PageHeader>Задачник Octave</PageHeader>
    <h3 class="mb-1">Список доступных глав:</h3>
    <div>
      <ol class="list-decimal list-inside">
        <li v-for="chapter of content" :key="chapter.id">
          <BaseLink :to="`/${course}/${type}/${chapter.id}`">{{ chapter.title }}</BaseLink>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const course = route.params.course as string
const type = route.params.type as string

const { content } = await useCourseContent(course, type);
</script>
