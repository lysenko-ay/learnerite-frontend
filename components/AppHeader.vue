<template>
  <div class="app-header bg-gray-100 p-4 shadow mb-4">
    <div class="container mx-auto">
      <NuxtLink :to="$route.path !== '/' ? '/' : ''" class="text-2xl">
        Learnerite
      </NuxtLink>
    </div>
  </div>
</template>
