<template>
  <header class="header">
    <nav>
      <ul>
        <li>
          <router-link
            :to="{name: 'home'}"
          >
            Home
          </router-link>
        </li>
        <li v-if="user">
          <router-link
            :to="{name: 'dashboard'}"
          >
            Dashboard
          </router-link>
        </li>
        <li v-if="!user">
          <router-link
            :to="{name: 'authenticate'}"
          >
            Auth
          </router-link>
        </li>
      </ul>
    </nav>
    <div v-if="user" class="controls">
      <button @click="logout">Logout</button>
      <p class="controls__name">{{store.state.user.name}}</p>
    </div>
    <div v-else class="controls">
      <button role="link">
        <router-link
            :to="{name: 'authenticate'}"
        >
          Login
        </router-link>
      </button>
    </div>
  </header>
</template>

<script setup>
  import {useStore} from "vuex";
  import {computed} from "vue";

  const store = useStore();

  const user = computed(() => store.getters.loggedIn);

  console.log(user.value);

  const logout = () => {
    store.dispatch('logout');
  }

</script>
<style scoped lang="scss">
  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__name {
      margin-left: 15px;
    }
  }
</style>
