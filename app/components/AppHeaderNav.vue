<script setup lang="ts">
const { loggedIn } = useUserSession();
</script>

<template>
  <nav class="hidden grow sm:block">
    <ul class="flex items-center gap-x-8">
      <li class="mr-auto">
        <AppHeaderNavLink to="/playlist">Library</AppHeaderNavLink>
      </li>

      <AuthState v-slot="{ loggedIn, clear }">
        <li v-if="loggedIn">
          <AppButton @click="clear">Logout</AppButton>
        </li>

        <template v-else>
          <li>
            <AppHeaderNavLink to="/login">Log In</AppHeaderNavLink>
          </li>
          <li>
            <AppButton to="/register">Sign Up</AppButton>
          </li>
        </template>
      </AuthState>
    </ul>
  </nav>
</template>
