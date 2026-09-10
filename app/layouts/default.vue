<template>
  <div class="dark flex min-h-screen flex-col dark:bg-gray-800">
    <AppHeader />
    <main>
      <slot></slot>
    </main>
    <AppFooter />
  </div>
</template>
