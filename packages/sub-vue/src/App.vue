<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="vue-app">
    <h2 style="color: #42b883">Vue Sub-App</h2>
    <p>This is the Vue micro-frontend, loaded by qiankun.</p>
    <button class="btn" @click="count++">Count: {{ count }}</button>
  </div>
</template>

<style scoped>
.vue-app {
  padding: 24px;
  font-family: sans-serif;
}
.btn {
  padding: 8px 24px;
  font-size: 16px;
  cursor: pointer;
  background: #42b883;
  color: #fff;
  border: none;
  border-radius: 6px;
}
</style>
