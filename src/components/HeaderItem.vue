<template>
  <header>
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
            :to="{name: 'register'}"
          >
            Register
          </router-link>
        </li>
      </ul>
    </nav>
    <!--    <p>{{name}}</p>-->
  </header>
</template>

<script setup>
  // import {useStore} from "vuex";
  //
  // const store = useStore();

</script>
