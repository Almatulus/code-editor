<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

const form = ref({
  email: "",
  password: "",
  repeatPassword: "",
});

interface ErrorMessage {
  email: string | null;
  password: string | null;
  repeatPassword: string | null;
}

const errorMessage = ref<ErrorMessage>({
  email: null,
  password: null,
  repeatPassword: null,
});

const isFormValid = computed(() => {
  const hasErrors = Boolean(
    errorMessage.value.email ||
    errorMessage.value.password ||
    errorMessage.value.repeatPassword,
  );

  const allFieldsFilled =
    form.value.email && form.value.password && form.value.repeatPassword;

  return !hasErrors && allFieldsFilled;
});

watch(
  () => form.value.email,
  (email) => {
    errorMessage.value.email = validateEmail(email);
  },
);

watch(
  () => form.value.password,
  (password) => {
    errorMessage.value.password = validatePassword(password);
  },
);

watch(
  () => form.value.repeatPassword,
  (repeatPassword) => {
    errorMessage.value.repeatPassword = confirmPassword(
      form.value.password,
      repeatPassword,
    );
  },
);

const { loggedIn, fetch: fetchUserSession } = useUserSession();

if (loggedIn.value) {
  navigateTo("/playlist");
}

async function handleRegister() {
  await $fetch("/api/register", {
    method: "POST",
    body: form.value,
  });

  await fetchUserSession();

  await navigateTo("/playlist");
}
</script>

<template>
  <form class="flex flex-col gap-y-4 sm:gap-y-6">
    <AppFormField
      v-model.trim="form.email"
      :error="errorMessage.email"
      type="email"
      id="email"
      >Email</AppFormField
    >

    <AppFormField
      v-model="form.password"
      :error="errorMessage.password"
      type="password"
      id="password"
      >Password</AppFormField
    >

    <AppFormField
      v-model="form.repeatPassword"
      :error="errorMessage.repeatPassword"
      type="password"
      id="password"
      >Password Confirmation</AppFormField
    >

    <AppButton
      @click.prevent="handleRegister"
      class="mt-2 sm:mt-1"
      :disabled="!isFormValid"
    >
      Sign Up</AppButton
    >
  </form>
  <p class="mt-6 text-center text-sm text-gray-600 sm:mt-8 dark:text-gray-300">
    Already have an account?
    <NuxtLink
      to="/login"
      class="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
    >
      Log In
    </NuxtLink>
  </p>
</template>
