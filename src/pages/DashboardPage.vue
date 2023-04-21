<template>
  <div>
    <List />
    <p>{{ errorMessage }}</p>
    <ul class="list">
      <li
        v-for="item in cards"
        :key="item.id"
        class="list__item"
      >
        <h2>{{ item.name }}</h2>
        <p>{{ item.email }}</p>
        <p>{{ item.age }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
    import List from "../components/ListItems.vue";
    import Service from "../services/service.js";

    import {ref, reactive, onMounted} from "vue";

    const cards = ref("");
    const errorMessage = ref("");

    onMounted(() => {
        reactive(Service.getUsers()
            .then(response => {
                cards.value = response.data;
            }).catch(e => {
              errorMessage.value = e.message;
            }).finally(() => "data is fetched"));
    });
</script>
