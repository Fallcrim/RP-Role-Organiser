<script setup lang="ts">
import BaseView from './BaseView.vue'
import { useUser } from '@/composables/user'

const userStore = useUser()
</script>

<template>
  <BaseView>
    <div class="px-2">
      <h1 class="ml-1">Dashboard</h1>
      <div class="container">
        <div class="fit-content p-4 border rounded-lg shadow-sm mx-2 mb-4">
          <h2>Hallo, {{ userStore.name }}!</h2>
          <p>Willkommen zum Dashboard.</p>
        </div>
        <div class="grid m-2 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div class="fit-content p-4 border rounded-lg shadow-sm">
            <h2>Tasks</h2>
            <p>Du hast derzeit keine aktiven Aufgaben.</p>
          </div>
          <div class="fit-content p-4 border rounded-lg shadow-sm">
            <h2>Events</h2>
            <p>In nächster Zeit sind keine Ereignisse geplant.</p>
          </div>
        </div>
      </div>
    </div>
  </BaseView>
</template>

<style scoped>
h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
</style>
