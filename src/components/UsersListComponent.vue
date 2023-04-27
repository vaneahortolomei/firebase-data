<template>
  <ul class="dashboard-list">
    <li
      v-for="item in cards"
      :key="item.id"
      class="dashboard-list__item dashboard-item"
    >
      <h2 class="dashboard-item__option">
        {{ item.name }}
      </h2>
      <p class="dashboard-item__option">
        {{ item.email }}
      </p>
      <p class="dashboard-item__option">
        {{ item.age }}
      </p>
    </li>
  </ul>
</template>

<script setup>
    import Service from "../services/service.js";

    import {ref, reactive, onMounted, defineEmits} from "vue";
    import {inject} from "vue";

    const emit = defineEmits(["users"]);

    const cards = ref("");
    let key = inject("key");


    onMounted(() => {
        reactive(
            Service.getUsers()
                .then(response => {
                    cards.value = response.data;
                    emit("users", cards.value);
                })
                .catch(e => {
                    key.message = e.message;
                })
                .finally(() =>
                    "data is fetched",
                ));
    });
</script>
