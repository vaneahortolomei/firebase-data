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
        <li>
          <router-link
            :to="{name: 'dashboard'}"
          >
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link
            :to="{name: 'authenticate'}"
          >
            Auth
          </router-link>
        </li>
      </ul>
    </nav>
    <div v-if="!data" class="controls">
      <button>Login</button>
    </div>
    <div v-else>{{name}}</div>
  </header>
</template>

<script setup>
  import {useStore} from 'vuex';
  import {computed, reactive, ref} from 'vue';

  const store = useStore();


  const data = store.state;
  const name = computed(() => data);

</script>
