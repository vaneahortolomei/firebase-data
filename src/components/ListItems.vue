<template>
  <div class="page">
    <div>{{name}}</div>
    <ul>
      <li>
        <button @click="showScreen('original')">
          OriginalItems
        </button>
      </li>
      <li>
        <button @click="showScreen('removed')">
          RemovedItems
        </button>
      </li>
    </ul>
    <header>
      <h2>{{ selectedTab === 'original' ? 'OriginalItems' : 'RemovedItems' }}</h2>
      <p>Length: {{ imgLength }}</p>
    </header>
    <ul v-if="imgLength > 0">
      <li
        v-for="image in filteredImages"
        :key="image.id"
        class="page__img-item"
      >
        <span>{{ image.id }}</span>
        <img
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

    const name = ref('John');
    const selectedTab = ref("original");
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
    };

    const sortedImages = computed(() => images.sort((a, b) => a.id - b.id));

    const filteredImages = computed(() => {
        if (selectedTab.value === "original") {
            return sortedImages.value.filter(img => img.status);
        } else {
            return sortedImages.value.filter(img => !img.status);
        }
    });


    const imgLength = computed(() => filteredImages.value.length);
</script>

<style scoped lang="scss">
    .page {
        max-width: 500px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;

        &__img-item {
            cursor: pointer;

            + .page__img-item {
                margin-left: 15px;
            }

        }
    }
</style>
