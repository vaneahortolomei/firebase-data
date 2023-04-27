<template>
  <div class="main-page">
    <div class="controls controls--main">
      <button
        class="button controls__button"
        @click="showScreen('original')"
      >
        Original Items
      </button>
      <button
        class="button controls__button"
        @click="showScreen('removed')"
      >
        Removed Items
      </button>
    </div>
    <header>
      <h2>{{ selectedTab === 'original' ? 'OriginalItems' : 'RemovedItems' }}</h2>
      <p>Length: {{ imgLength }}</p>
    </header>
    <ul
      v-if="imgLength > 0"
      class="list"
    >
      <li
        v-for="image in filteredImages"
        :key="image.id"
        class="list__item"
      >
        <span>{{ image.id }}</span>
        <img
          class="list__img"
          :src="image.src"
          :alt="image.name"
          :data-status="image.status"
          @click="removeItem(image)"
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
    import {ref, reactive, computed} from "vue";

    const selectedTab = ref("original");
    const active = ref(false);
    const images = reactive([
        {
            id: 2,
            name: "image2",
            src: "/vite.svg",
            status: true,
        },
        {
            id: 1,
            name: "image1",
            src: "/vite.svg",
            status: true,
        },
        {
            id: 3,
            name: "image3",
            src: "/vite.svg",
            status: true,
        },
        {
            id: 5,
            name: "image5",
            src: "/vite.svg",
            status: true,
        },
        {
            id: 4,
            name: "image4",
            src: "/vite.svg",
            status: true,
        },
    ]);


    const removeItem = image => {
        image.status = selectedTab.value !== "original";
    };

    const showScreen = str => {
        selectedTab.value = str;
        active.value = true;
    };

    const sortedImages = computed(() => images.slice(0).sort((a, b) => a.id - b.id));

    const filteredImages = computed(() => {
        if (selectedTab.value === "original") {
            return sortedImages.value.filter(img => img.status);
        } else {
            return sortedImages.value.filter(img => !img.status);
        }
    });


    const imgLength = computed(() => filteredImages.value.length);
</script>
