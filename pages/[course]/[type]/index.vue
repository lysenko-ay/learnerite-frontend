<template>
  <div class="taskbook">
    <div>Задачник Octave</div>

    <div>
      <ul>
        <li v-for="chapter of content" :key="chapter.id">
          <NuxtLink :to="`/${course}/${type}/${chapter.id}`" class="text-blue-600 hover:text-blue-700">
            {{ chapter.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const course = route.params.course as string
const type = route.params.type as string

const { content } = await useCourseContent(course, type);
</script>
