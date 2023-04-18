<template>
  <header>
    <nav>
      <ul class="list">
        <li class="list__item">
          <router-link
            :to="{name: 'home'}"
            class="list__link"
          >
            Home
          </router-link>
        </li>
        <li class="list__item">
          <router-link
            :to="{name: 'dashboard'}"
            class="list__link"
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
