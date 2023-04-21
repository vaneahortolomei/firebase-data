<template>
  <form
    role="form"
    class="form"
    action="#"
    @submit.prevent="register"
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
    <div class="form__group">
      <label
        class="form__label"
        for="userPassword"
      >Password</label>
      <input
        id="userPassword"
        v-model="userPassword"
        type="password"
        class="form__input"
        name="userPassword"
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
</template>

<script setup>
    import {ref} from "vue";
    import {useStore} from "vuex";
    import {useRouter} from "vue-router";

    const userName = ref("");
    const userEmail = ref("");
    const userPassword = ref("");


    const error = ref(false);
    const store = useStore();
    const route = useRouter();

    const register = () => {

        if (!userName.value ||
            !userEmail.value ||
            !userPassword.value) {
            return error.value = true;
        } else {
            error.value = false;
        }

        return store.dispatch("register", {
            name: userName.value,
            email: userEmail.value,
            password: userPassword.value,
        }).then(() => {
            route.push({
                name: "dashboard",
            });
        }).catch(e => {
            return e.message;
        });
    };


</script>
