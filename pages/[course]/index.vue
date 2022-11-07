<template>
  <div class="index">
    <PageHeader>Курс Octave</PageHeader>
    <h3 class="mb-1">Список доступных разделов:</h3>
    <div>
      <ul class="list-disc list-inside">
        <li>
          <BaseLink :to="`/${$route.params.course}/taskbook`">Задачник</BaseLink>
        </li>
      </ul>
    </div>
  </div>
</template>
