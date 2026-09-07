<script setup lang="ts">
const sectionHeader = {
  title: "Extensions",
  description: `Expand your capabilities with powerful extensions tailored to enhance your
              coding experience.`,
};
</script>

<template>
  <section class="flex flex-col gap-y-6 py-8 sm:gap-y-8 sm:py-16">
    <AppSectionHeader
      :title="sectionHeader.title"
      :description="sectionHeader.description"
    />
    <AppNewsletterContent />
  </section>
</template>
