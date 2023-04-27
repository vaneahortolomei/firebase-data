<template>
  <div class="dashboard">
    <h1>{{ users }} Items</h1>
    <Users @users="usersLength" />
  </div>
</template>

<script setup>
    import Users from "../components/UsersListComponent.vue";
    import {ref} from "vue";

    const users = ref(0);

    const usersLength = (data) => {
        users.value = data.length;
    };
</script>
