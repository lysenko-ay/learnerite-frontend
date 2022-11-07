<template>
  <tr class="test-result border-b" :class="{ 'bg-green-100': test.passed, 'bg-red-100': !test.passed }">
    <td class="text-center border-r p-2">{{ test.index + 1 }}</td>
    <td class="text-center border-r p-2">{{ test.params }}</td>
    <td class="text-center border-r p-2">{{ test.expectation }}</td>
    <td class="text-center border-r p-2">{{ test.result }}</td>
  </tr>
</template>

<script setup lang="ts">
const props = defineProps({
  test: {
    type: Object,
    required: true,
  },
});
</script>
