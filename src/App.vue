<template>
  <Header />
  <transition name="fade">
    <div
      v-if="key.message"
      class="message"
    >
      {{ key.message }}
    </div>
  </transition>
  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
    import Header from "./components/HeaderItem.vue";
    import {inject} from "vue";

    let key = inject("key");

</script>
