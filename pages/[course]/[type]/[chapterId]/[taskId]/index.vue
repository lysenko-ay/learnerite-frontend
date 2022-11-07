<template>
  <div class="taskbook-task">
    <PageHeader>{{ index[chapterId + '/' + taskId].title }}</PageHeader>
    <MarkdownRenderer :data="task.description" class="mb-3" />

    <textarea class="w-full border-2 focus:outline-none font-mono px-2 py-1" rows="10" v-model="code"></textarea>

    <div class="border-2 rounded-md bg-gray-100 border-gray-200 p-3 m-3 mb-5 flex justify-between items-center"
      :class="{ 'bg-green-100': taskCompleted, 'bg-red-100': taskFailed, }">
      <div v-if="taskCompleted">Все тесты успешно пройдены!</div>
      <div v-else-if="errors">При выполнении кода возникла ошибка.</div>
      <div v-else-if="taskFailed">Пройдено тестов: {{ passedTests }} / {{ totalTests }}.</div>
      <div v-else-if="checking">Позиция в очереди: 1</div>
      <div v-else>Нажмите "Проверить решение", чтобы проверить решение.</div>
      <button
        class="w-52 border rounded-md border-gray-400 px-4 py-2 hover:bg-gray-50 disabled:bg-transparent disabled:cursor-not-allowed disabled:text-gray-400 disabled:border-gray-300"
        @click="onSendPressed" :disabled="checking">
        <span v-if="!checking">Проверить решение</span>
        <span v-else>Решение проверяется...</span>
      </button>
    </div>

    <TaskResults v-if="tests.length" :tests="tests" />
    <TaskError v-if="errors" :error="errors" />

    <Navigation :entry="index[chapterId + '/' + taskId]" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const course = route.params.course as string
const type = route.params.type as string
const chapterId = route.params.chapterId as string
const taskId = route.params.taskId as string

const { index } = await useCourseContent(course, type);
const task = await useTaskContent(course, type, chapterId, taskId) as any;
const { validate } = useCodeValidation()

const code = ref('')
const checking = ref(false)
const tests = ref([])
const errors = ref('')
const totalTests = ref(0)
const passedTests = ref(0)

const taskCompleted = ref(false)
const taskFailed = ref(false)

const onSendPressed = async () => {
  // reset variables
  tests.value = []
  errors.value = ''
  taskCompleted.value = false
  taskFailed.value = false

  // perform code validation
  checking.value = true
  const { result, error } = await validate(course, type, chapterId, taskId, code.value) as any
  checking.value = false

  // parse test results
  if (result) {
    const lines = result.split('\r\n').filter((line) => line[0] === '`').map(test => test.slice(1).split('|'));
    lines.forEach((line, index) => {
      tests.value.push({
        params: JSON.parse(line[0]),
        passed: line[1] === line[2],
        expectation: line[1],
        result: line[2],
        index,
      });

      if (line[1] === line[2]) {
        passedTests.value++;
      }

      totalTests.value = lines.length;
    });
  }

  // parse error
  if (error) {
    errors.value = error
  }

  // update task status
  taskCompleted.value = !error && passedTests.value === totalTests.value
  taskFailed.value = !taskCompleted.value
}
</script>
