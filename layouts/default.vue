<script setup lang="ts">
import MFooter from '~/components/MFooter.vue';
import MHeader from '~/components/MHeader.vue';
</script>

<template>
  <div class="h-full">
    <MHeader />
    <main>
      <slot />
    </main>
    <MFooter />
  </div>
</template>
