<template>
    <div class="wrapper">
        <div class="content">
            <Header/>
            <transition name="fade">
              <Notification/>
            </transition>
            <div class="container">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Header from "./components/HeaderComponent.vue";
    import Notification from "./components/NotificationComponent.vue";
</script>
