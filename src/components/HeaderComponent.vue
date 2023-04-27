<template>
  <header class="header">
    <nav class="header__navigation">
      <ul class="header__list nav-list">
        <li class="nav-list__item">
          <router-link
            class="nav-list__link"
            :to="{name: 'home'}"
          >
            Home
          </router-link>
        </li>
        <li
          v-if="data"
          class="nav-list__item"
        >
          <router-link
            class="nav-list__link"
            :to="{name: 'dashboard'}"
          >
            Dashboard
          </router-link>
        </li>
      </ul>
    </nav>
    <div
      v-if="data"
      class="controls controls--header"
    >
      <button
        class="controls__button button button--primary"
        @click="logout"
      >
        Logout
      </button>
    </div>
    <div
      v-else
      class="controls controls--header"
    >
      <router-link
        class="controls__link button button--primary"
        :to="{name: 'authenticate'}"
      >
        Login
      </router-link>
    </div>
  </header>
</template>

<script setup>
    import {useStore} from "vuex";
    import {computed} from "vue";

    const store = useStore();

    const data = computed(() => store.getters.loggedIn);


    const logout = () => {
        store.dispatch("logout");
    };

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
