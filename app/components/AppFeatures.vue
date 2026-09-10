<script setup lang="ts">
const sectionHeader = {
  title: "Unlock the Full Potential",
  description: ` With tailored settings, keyboard shortcuts, and powerful
          extensions, you can work smarter and faster.`,
};
</script>

<template>
  <section
    class="flex flex-col gap-y-8 bg-gray-50 py-8 sm:gap-y-12 sm:py-16 dark:bg-gray-700"
    id="features"
  >
    <AppSectionHeader
      type="section"
      :title="sectionHeader.title"
      :description="sectionHeader.description"
    />
    <AppFeaturesContent />
  </section>
</template>
