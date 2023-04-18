<template>
  <form
    role="form"
    class="form"
    action="#"
    @submit.prevent="submitRegisterForm"
  >
    <div class="form__group">
      <label
        class="form__label"
        for="userName"
      >Name</label>
      <input
        id="userName"
        v-model="userName"
        type="text"
        class="form__input"
        name="userName"
      >
      <span
        v-if="error"
        class="form__error"
      >Error</span>
    </div>
    <div class="form__group">
      <label
        class="form__label"
        for="userEmail"
      >Email</label>
      <input
        id="userEmail"
        v-model="userEmail"
        type="text"
        class="form__input"
        name="userEmail"
      >
      <span
        v-if="error"
        class="form__error"
      >Error</span>
    </div>
    <button type="submit">
      Send
    </button>
  </form>


  <div>
    <p
      v-for="user in data"
      :key="user"
    >
      {{ user }}
    </p>
  </div>
</template>

<script setup>
    import {ref} from "vue";

    const userName = ref("");
    const userEmail = ref("");
    const error = ref(false);

    const data = ref(null);

    const submitRegisterForm = () => {

        if(!userName.value || !userEmail.value){
          return error.value = true;
        }

        else {
          error.value = false;
        }

        return data.value = {
            name: userName.value,
            email: userEmail.value,
        };
    };
</script>
