<template>
    <div>
        <List/>

        <div v-for="item in cards" :key="item">
            <p>{{item.name}}</p>
            <p>{{item.email}}</p>
            <p>{{item.age}}</p>
        </div>
    </div>
</template>

<script setup>
    import List from "../components/ListItems.vue";
    import Service from "../services/service.js";

    import {ref, reactive, onMounted, computed} from "vue";

    const cards = ref('');

    onMounted(() => {
        reactive(Service.getUsers()
            .then(data => {
                cards.value = data;
            }).catch(e => {
                return e.message;
            }).finally(() => 'data is fetched'));
    });
</script>
