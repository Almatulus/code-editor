<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

const form = ref({
  email: "",
  password: "",
});

const errorMessage = ref<string | null>("");

const { loggedIn, fetch: fetchUserSession } = useUserSession();

if (loggedIn.value) {
  navigateTo("/playlist");
}

async function handleLogin() {
  errorMessage.value = "";
  try {
    await $fetch("/api/login", {
      method: "POST",
      body: form.value,
    });

    await fetchUserSession();

    await navigateTo("/playlist");
  } catch (error: any) {
    errorMessage.value =
      error.data.message || "Что-то пошло не так, повторите позже!";
  }
}
</script>

<template>
  <form @submit.prevent="handleLogin" class="flex flex-col gap-y-4 sm:gap-y-6">
    <AppFormField v-model.trim="form.email" type="email" id="email"
      >Email</AppFormField
    >
    <AppFormField v-model="form.password" type="password" id="password"
      >Password</AppFormField
    >

    <div
      v-if="errorMessage"
      class="rounded-lg bg-red-100 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400"
    >
      {{ errorMessage }}
    </div>

    <AppButton type="submit" class="mt-2 sm:mt-1">Log In</AppButton>
  </form>
  <p class="mt-6 text-center text-sm text-gray-600 sm:mt-8 dark:text-gray-300">
    Don't have an account?
    <NuxtLink
      to="/register"
      class="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
    >
      Sign Up
    </NuxtLink>
  </p>
</template>
