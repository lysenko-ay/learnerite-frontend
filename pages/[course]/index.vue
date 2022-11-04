<template>
  <div class="index">
    <div>Курс Octave</div>
    <div>
      <ul>
        <li>
          <NuxtLink :to="`/${$route.params.course}/taskbook`" class="text-blue-600 hover:text-blue-700">
            Задачник Octave
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
