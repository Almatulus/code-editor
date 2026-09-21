<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

const form = ref({
  email: "",
  password: "",
  repeatPassword: "",
});

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
    {{ loggedIn }}
    <AppFormField v-model.trim="form.email" type="email" id="email"
      >Email</AppFormField
    >
    <AppFormField v-model="form.password" type="password" id="password"
      >Password</AppFormField
    >
    <AppFormField v-model="form.repeatPassword" type="password" id="password"
      >Password Confirmation</AppFormField
    >

    <AppButton @click.prevent="handleRegister" class="mt-2 sm:mt-1">
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
