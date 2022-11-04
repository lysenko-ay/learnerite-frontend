<template>
  <div class="navigation flex">
    <div class="w-1/4">
      <NuxtLink v-if="entry.prev" :to="rootUrl + '/' + entry.prev" class="text-blue-600 hover:text-blue-700 w-1/4">
        &lt; {{ index[entry.prev].title }}
      </NuxtLink>
    </div>
    <div class="flex-1 text-center">
      <NuxtLink :to="upUrl" class="text-blue-600 hover:text-blue-700">Наверх</NuxtLink>
    </div>
    <div class="w-1/4 text-end">
      <NuxtLink v-if="entry.next" :to="rootUrl + '/' + entry.next" class="text-blue-600 hover:text-blue-700">
        {{ index[entry.next].title }} &gt;
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  entry: Object
})

const route = useRoute()
const course = route.params.course as string
const type = route.params.type as string
const rootUrl = `/${course}/${type}`
const upUrl = route.path.split('/').slice(0, -1).join('/')

const { index } = await useCourseContent(course, type);
</script>
