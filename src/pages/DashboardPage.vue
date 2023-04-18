<template>
  <div>
    Dashboard
    <List />

    <ul>
      <li>{{ response }}</li>
      <li>{{ data }}</li>
    </ul>
  </div>
</template>

<script setup>
    import List from "../components/ListItems.vue";

    import axios from "axios";
    import {ref} from "vue";

    const response = ref("");
    const data = ref("");

    axios.get("//localhost:3000/dashboard")
        .then(data => {
            return data.value = data.data;
        })
        .catch(e => {
            return response.value = e.message;
        })
        .finally(() => "data is fetched!");
</script>
