<template>
  <VueRecaptcha :sitekey="config.RECAPTCHA_SITE_KEY" size="invisible" ref="recaptcha" @verify="onRecaptchaVerified"
    @expire="onRecaptchaExpired" @fail="onRecaptchaFailed" />
</template>

<script setup lang="ts">
import vueRecaptcha from 'vue3-recaptcha2';
const VueRecaptcha = vueRecaptcha;
const config = useRuntimeConfig();

const recaptcha = ref();
let shouldReset = false;
let resolveCtx;;
let rejectCtx;;

const execute = () => {
  return new Promise((resolve, reject) => {
    resolveCtx = resolve;
    rejectCtx = reject;

    if (shouldReset) {
      recaptcha.value.reset();
    }

    recaptcha.value.execute();
    shouldReset = true;
  });
}

const onRecaptchaVerified = (token: string) => {
  resolveCtx(token);
}

const onRecaptchaExpired = () => {
  rejectCtx({ error: 'recaptcha expired' });
}

const onRecaptchaFailed = () => {
  rejectCtx({ error: 'recaptcha failed' });
}

defineExpose({
  execute,
});
</script>
