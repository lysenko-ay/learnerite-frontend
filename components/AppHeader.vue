<template>
  <div class="app-header bg-gray-200 p-4 shadow mb-5">
    <div class="container mx-auto">
      <NuxtLink :to="$route.path !== '/' ? '/' : ''">
        Learnerite
      </NuxtLink>
    </div>
  </div>
</template>
