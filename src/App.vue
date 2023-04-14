<template>
  <div>{{ string }} Vanea!</div>
  <img src="/vite.svg" alt="image"/>
  <img src="/vite.svg" alt="image"/>
  <img src="/vite.svg" alt="image"/>
</template>
<script setup>
    import {ref} from "vue";

    const string = ref("hello");
    const number = ref(1);

    console.log("number", number.value);
</script>
