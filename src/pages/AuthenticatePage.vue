<template>
  <ul>
    <li>
      <button @click="showScreen('login')">
        Login
      </button>
    </li>
    <li>
      <button @click="showScreen('register')">
        Register
      </button>
    </li>
  </ul>
  <div v-if="selectedTab === 'register'">
    <Register />
  </div>
  <div v-else>
    <Login />
  </div>
</template>

<script setup>

    import {ref} from "vue";
    import Register from "../components/RegisterComponent.vue";
    import Login from "../components/LoginComponent.vue";

    const selectedTab = ref("");

    const showScreen = str => {
        selectedTab.value = str;
    };
</script>
