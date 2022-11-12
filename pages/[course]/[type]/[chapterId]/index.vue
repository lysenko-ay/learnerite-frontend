<template>
  <div class="taskbook-chapter">
    <PageHeader>{{ index[chapterId].title }}</PageHeader>
    <MarkdownRenderer :data="chapter.description" />

    <h3 class="mb-1 mt-3">Список доступных заданий:</h3>
    <div class="taskbook-chapter__content">
      <ol class="list-decimal list-inside">
        <li v-for="task of index[chapterId].content" :key="task.id">
          <BaseLink :to="`/${course}/${type}/${chapterId}/${task.id}`">
            {{ task.title }}
          </BaseLink>
        </li>
      </ol>
    </div>

    <Navigation :entry="index[chapterId]" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const course = route.params.course as string
const type = route.params.type as string
const chapterId = route.params.chapterId as string

const { index } = await useCourseContent(course, type);
const chapter = await useChapterContent(course, type, chapterId) as any;
</script>
