<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { computed } from 'vue';

const isDevelopment = computed(() => import.meta.env.MODE === 'development');
</script>

<template>
  <RouterView />
  <VueQueryDevtools :initialIsOpen="isDevelopment" />
</template>
