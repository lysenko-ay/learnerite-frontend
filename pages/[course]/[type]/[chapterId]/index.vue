<template>
  <div class="taskbook-chapter">
    <div class="taskbook-chapter__title">{{ index[chapterId].title }}</div>
    <div>{{ chapter.description }}</div>

    <div class="taskbook-chapter__content">
      <ul>
        <li v-for="task of index[chapterId].content" :key="task.id">
          <NuxtLink :to="`/${course}/${type}/${chapterId}/${task.id}`" class="text-blue-600 hover:text-blue-700">
            {{ task.title }}
          </NuxtLink>
        </li>
      </ul>
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
