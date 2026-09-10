<template>
  <div class="container">
    <form class="flex justify-center gap-x-2">
      <AppFormField
        id="email"
        type="email"
        placeholder="Your Email"
        class="w-60 sm:w-96"
      />
      <button
        class="rounded-md bg-indigo-600 px-4 py-1 font-semibold text-indigo-50 hover:bg-indigo-700 sm:rounded-lg sm:px-6 sm:py-2"
      >
        <span class="hidden sm:inline">Subscribe</span>
        <Icon name="plane" class="size-5 sm:hidden" />
      </button>
    </form>
  </div>
</template>
