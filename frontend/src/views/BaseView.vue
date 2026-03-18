<template>
<Sidebar />
<div class="content">
  <slot />
</div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
</script>

<style scoped>
.content {
  margin-left: calc(var(--spacing) * 68);
  margin-top: calc(var(--spacing) * 4);
  margin-right: calc(var(--spacing) * 4);
}
</style>