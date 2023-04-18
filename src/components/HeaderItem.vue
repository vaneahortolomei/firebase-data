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
      </ul>
    </nav>
  </header>
</template>

<script setup>

</script>
